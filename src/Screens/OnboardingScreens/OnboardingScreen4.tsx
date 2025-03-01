import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import Icon from "../../svg/svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setOnboardingComplete } from "../../Redux/Slice/onboardingSlice";

export default function OnboardingScreen4({ setIsOnboardingComplete }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const prfeatures = [
    { id: 1, title: "Unlimited", subTitle: "Plant Identify", iconName: "unlimited" },
    { id: 2, title: "Faster", subTitle: "Process", iconName: "faster" },
    { id: 3, title: "No Ads", subTitle: "Experience", iconName: "faster" },
  ];
  const completeOnboarding = () => {
    dispatch(setOnboardingComplete(true)); // Redux state ve AsyncStorage güncellenir
    navigation.replace("HomeBottomBar");
  };

  const [firstOption, setFirstOption] = useState(false);
  const [secondOption, setSecondOption] = useState(true);


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/TittleImage.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.closeButton} onPress={
            () => {
              completeOnboarding();

            }
          }>
            <Icon iconName="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>PlantApp<Text style={styles.titleNext}> Premium</Text></Text>
            <Text style={styles.subtitle}>Access All Features</Text>
          </View>
        </View>
        <FlatList
          style={styles.flatList}
          horizontal={true}
          data={prfeatures}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.featureItem}>
              <Icon iconName={item.iconName} size={36} color="#fff" />
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>{item.title}</Text>
                <Text style={styles.featureSubTitle}>{item.subTitle}</Text>
              </View>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
        />
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            onPress={() => { setFirstOption(true); setSecondOption(false); }}
            style={[styles.optionButton, firstOption && styles.optionButtonActive]}
          >
            <View style={[styles.optionRadio, firstOption && styles.optionRadioActive]}>
              <View style={[styles.optionRadioInner, firstOption && styles.optionRadioInnerActive]} />
            </View>
            <View>
              <Text style={styles.optionText}>1 Month</Text>
              <Text style={styles.optionSubText}>$2.99/month, auto renewable</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { setFirstOption(false); setSecondOption(true); }}
            style={[styles.optionButton, secondOption && styles.optionButtonActive]}
          >
            {/* Save %50 View */}
            <View style={styles.saveBadge}>
              <Text style={styles.saveBadgeText}>Save 50%</Text>
            </View>

            {/* Radio Button */}
            <View style={[styles.optionRadio, secondOption && styles.optionRadioActive]}>
              <View style={[styles.optionRadioInner, secondOption && styles.optionRadioInnerActive]} />
            </View>

            {/* Text Content */}
            <View>
              <Text style={styles.optionText}>1 Year</Text>
              <Text style={styles.optionSubText}>First 3 days free, then $529,99/year</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => console.log('Try free for 3 days pressed')}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            contentStyle={styles.buttonContent}
          >
            Try free for 3 days
          </Button>
          <Text style={styles.disclaimerText}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
          </Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Terms  •  Privacy  •  Restore</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  saveBadge: {
    position: 'absolute',
    top: 0, // Sağ üst köşeden biraz aşağıda
    right: 0, // Sağ üst köşeden biraz içeride
    backgroundColor: '#2e8b57', // Yeşil renk
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 14,

    padding: 4

  },
  saveBadgeText: {
    color: '#fff', // Beyaz renk
    fontSize: 12,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: "#101e17",
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: "100%",
    height: screenWidth * 1.45,
    resizeMode: "cover",
  },
  closeButton: {
    position: "absolute",
    top: 65,
    right: 0,
    width: 40,
    height: 40,
  },
  contentContainer: {
    paddingHorizontal: 24,
    marginTop: -screenWidth * 0.65,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
  },
  titleNext: {
    fontSize: 30,
    fontWeight: '300',
    color: '#fff',
  },
  subtitle: {
    fontSize: 17,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  flatList: {
    flex: 1,
    paddingLeft: 24,
    marginBottom: 24,
  },
  flatListContent: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  featureItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    margin: 4,
    width: 156,
    height: 130,
  },
  featureTextContainer: {
    marginTop: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: "#fff",
  },
  featureSubTitle: {
    fontSize: 13,
    color: "rgba(255, 255, 255, 0.7)",
  },
  optionsContainer: {
    paddingHorizontal: 24,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 13,
  },
  optionButtonActive: {
    borderColor: "#2e8b57",
  },
  optionRadio: {
    borderRadius: 100,
    width: 24,
    height: 24,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  optionRadioActive: {
    backgroundColor: "#2e8b57",
  },
  optionRadioInner: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: "transparent",
  },
  optionRadioInnerActive: {
    backgroundColor: "#fff",
  },
  optionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  optionSubText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 12,
    fontWeight: "400",
  },
  buttonContainer: {
    paddingHorizontal: 24,
  },
  button: {
    width: '100%',
    backgroundColor: '#2e8b57',
    marginBottom: 8,
    borderRadius: 14,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonContent: {
    height: 56,
  },
  disclaimerText: {
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: "300",
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 10,
  },
});