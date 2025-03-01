import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Platform, RefreshControl, ScrollView, TouchableOpacity, View, Text, Image, FlatList, StatusBar, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../../svg/svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { setQuestions } from '../../Redux/Slice/questionsSlice';
import { ToastType, useToast } from '../../Contexts/ToastProvider';
import { Api } from '../../Api/Api';
import { setCategories } from '../../Redux/Slice/categoriesSlice';

export default function HomeScreen(props: any) {
    const dispatch = useDispatch();
    const toast = useToast();
    const questions = useSelector((state: any) => state.questions.questions);
    const categories = useSelector((state: any) => state.categories.categories);
    const [loading, setLoading] = useState(false);

    const fetchQuestions = async () => {
        setLoading(true);
        try {
            const response = await Api.get('/getQuestions');
            if (response.status === 200) {
                dispatch(setQuestions(response.data));
            } else {
                toast.show(ToastType.Error, 'Kategoriler getirilirken bir hata oluştu');
            }
        } catch (error) {
            toast.show(ToastType.Error, 'Kategoriler getirilirken bir hata oluştu');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);
        try {
            const response = await Api.get('/getCategories');
            if (response.status === 200) {
                dispatch(setCategories(response?.data?.data));
            } else {
                toast.show(ToastType.Error, 'Kategoriler getirilirken bir hata oluştu');
            }
        } catch (error) {
            toast.show(ToastType.Error, 'Kategoriler getirilirken bir hata oluştu');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <SafeAreaView>
            </SafeAreaView>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hi, plant lover!</Text>
                <Text style={styles.headerSubText}>Good Afternoon! ⛅</Text>
            </View>
            <View style={styles.plantImagesContainer}>
                <View style={styles.plantImagesWrapper}>
                    <Image
                        source={require("../../assets/plant2.png")}
                        style={styles.plantImage1}
                    />
                    <Image
                        source={require('../../assets/plant1.png')}
                        style={styles.plantImage2}
                    />
                </View>
                <View style={styles.searchBarContainer}>
                    <SearchBar placeholder='Search for plants' />
                </View>
            </View>
            <View style={styles.premiumContainer}>
                <View style={styles.premiumContent}>
                    <View style={styles.premiumTextContainer}>
                        <Icon iconName="message" size={24} color="white" />
                        <View>
                            <Text style={styles.premiumText}>FREE Premium Available</Text>
                            <Text style={styles.premiumSubText}>Tap to upgrade your account!</Text>
                        </View>
                    </View>
                    <Icon iconName={"right"} size={24} color="white" />
                </View>
            </View>
            <View style={styles.getStartedContainer}>
                <Text style={styles.getStartedText}>Get Started</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={questions}
                    keyExtractor={(item: any) => item.id}
                    style={styles.questionsFlatList}
                    getItemLayout={(data, index) => (
                        { length: 240, offset: 240 * index, index } 
                    )}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.questionItem}>
                            <Image
                                source={{ uri: item.image_uri }}
                                style={styles.questionImage}
                            />
                            <View style={styles.questionTextContainer}>
                                <Text style={styles.questionText}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.categoriesContainer}>
                <FlatList
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={(item: any) => item.id}
                    contentContainerStyle={styles.categoriesFlatListContent}
                    columnWrapperStyle={styles.categoriesColumnWrapper}
                    getItemLayout={(data, index) => (
                        { length: 240, offset: 240 * index, index } 
                    )}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.categoryItem}>
                            <Image
                                source={{ uri: item?.image?.url }}
                                style={styles.categoryImage}
                            />
                            <View style={styles.categoryTextContainer}>
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFAFA",
    },
    headerContainer: {
        paddingHorizontal: 24,
    },
    headerText: {
        fontSize: 16,
        fontWeight: '400',
    },
    headerSubText: {
        fontSize: 24,
        fontWeight: '500',
        marginTop: 6,
    },
    plantImagesContainer: {
        marginTop: 0,
    },
    plantImagesWrapper: {
        position: "relative",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "flex-start",
        alignItems: "flex-start",
    },
    plantImage1: {
        width: 98.8,
        height: 86.6,
        transform: [{ rotate: "162deg" }],
        opacity: 0.5,
        right: 30,
        top: 35,
    },
    plantImage2: {
        width: 98.8,
        height: 86.6,
        transform: [{ rotate: "220deg" }],
        opacity: 0.5,
        left: 20,
        top: 20,
    },
    searchBarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
        padding: 24,
    },
    premiumContainer: {
        backgroundColor: "#FBFAFA",
        padding: 24,
    },
    premiumContent: {
        flexDirection: 'row',
        backgroundColor: "#24201A",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    premiumTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    premiumText: {
        color: "white",
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 12,
    },
    premiumSubText: {
        color: "white",
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 12,
    },
    getStartedContainer: {
        backgroundColor: "#FBFAFA",
    },
    getStartedText: {
        fontSize: 15,
        fontWeight: '500',
        paddingHorizontal: 24,
    },
    questionsFlatList: {
        marginTop: 16,
        paddingLeft: 24,
    },
    questionItem: {
        marginRight: 16,
        position: 'relative',
    },
    questionImage: {
        width: 240,
        height: 164,
        borderRadius: 12,
    },
    questionTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 8,
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FFF',
    },
    categoriesContainer: {
        backgroundColor: "#FBFAFA",
        flex: 1,
        marginTop: 24,
    },
    categoriesFlatListContent: {
        paddingHorizontal: 24,
        paddingBottom: 16,
    },
    categoriesColumnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    categoryItem: {
        width: '48%',
        aspectRatio: 1.5,
        position: 'relative',
        borderWidth: 0.5,
        borderColor: "#eff0ef",
        borderRadius: 12,
        backgroundColor: "#fdfffd",
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    categoryTextContainer: {
        position: 'absolute',
        left: 0,
        padding: 16,
        width: '65%',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        textAlign: "left",
    },
});