import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfessionalDetails() {
  const router = useRouter();

  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [areas, setAreas] = useState<string[]>([]);

  const categories = [
    "Electrical",
    "Plumbing",
    "Air Conditioning (AC)",
    "Home Appliances",
  ];

  const cities = [
    "Riyadh",
    "Jeddah",
    "Dammam",
    "Mecca",
    "Medina",
    "Khobar",
    "Tabuk",
    "Other",
  ];

  function toggleCity(city: string) {
    if (areas.includes(city)) {
      setAreas(areas.filter((item) => item !== city));
    } else {
      setAreas([...areas, city]);
    }
  }

  function handleNext() {
    if (!category || !experience || !bio || areas.length === 0) {
      alert("Please fill all fields");
      return;
    }

    router.push("/(auth)/upload-documents");
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Professional Details</Text>
        </View>

        <View style={styles.dots}>
          <View style={styles.smallDot} />
          <View style={styles.smallDot} />
          <View style={styles.activeDot} />
          <View style={styles.smallDot} />
        </View>

        <Text style={styles.label}>Service Category</Text>

        <View style={styles.categoryBox}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.option,
                category === item && styles.optionActive,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  category === item && styles.optionTextActive,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Years of Experience</Text>

        <TextInput
          value={experience}
          onChangeText={setExperience}
          placeholder="e.g. 5"
          placeholderTextColor="#9AA0A6"
          keyboardType="number-pad"
          style={styles.input}
        />

        <Text style={styles.label}>Short Bio</Text>

        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="Tell us about your expertise and certifications..."
          placeholderTextColor="#9AA0A6"
          multiline
          style={styles.textArea}
        />

        <Text style={styles.label}>Service Areas (KSA Cities)</Text>

        <View style={styles.cityWrap}>
          {cities.map((city) => (
            <TouchableOpacity
              key={city}
              onPress={() => toggleCity(city)}
              style={[
                styles.cityChip,
                areas.includes(city) && styles.cityChipActive,
              ]}
            >
              <Text
                style={[
                  styles.cityText,
                  areas.includes(city) && styles.cityTextActive,
                ]}
              >
                {city}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleNext}>
          <Text style={styles.primaryBtnText}>Next</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  content: {
    padding: 18,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    marginRight: 42,
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },

  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 22,
  },

  smallDot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#D9D8F0",
  },

  activeDot: {
    width: 32,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#1B1B6D",
  },

  label: {
    marginTop: 14,
    marginBottom: 8,
    color: "#101828",
    fontWeight: "800",
    fontSize: 14,
  },

  categoryBox: {
    gap: 8,
  },

  option: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    borderRadius: 14,
    padding: 14,
  },

  optionActive: {
    backgroundColor: "#1B1B6D",
    borderColor: "#1B1B6D",
  },

  optionText: {
    color: "#101828",
    fontWeight: "700",
  },

  optionTextActive: {
    color: "#FFFFFF",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    borderRadius: 14,
    height: 54,
    paddingHorizontal: 14,
    color: "#101828",
    fontSize: 14.5,
  },

  textArea: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    borderRadius: 14,
    minHeight: 120,
    paddingHorizontal: 14,
    paddingTop: 14,
    color: "#101828",
    fontSize: 14.5,
    textAlignVertical: "top",
  },

  cityWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  cityChip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
  },

  cityChipActive: {
    backgroundColor: "#1B1B6D",
    borderColor: "#1B1B6D",
  },

  cityText: {
    color: "#6B7280",
    fontWeight: "700",
    fontSize: 13,
  },

  cityTextActive: {
    color: "#FFFFFF",
  },

  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 18,
    backgroundColor: "#F3F4F8",
    borderTopWidth: 1,
    borderTopColor: "#E6E8F0",
  },

  primaryBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },
});