import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Mithaq() {
  const router = useRouter();
  const [agree, setAgree] = useState(false);

  function handleContinue() {
    if (!agree) {
      alert("Please agree to the charter first");
      return;
    }

    router.push("/(auth)/profile" as any);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#1B1B6D" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.iconBox}>
          <Ionicons name="document-text-outline" size={38} color="#1B1B6D" />
        </View>

        <Text style={styles.title}>Professional Charter (Mithaq)</Text>

        <Text style={styles.subtitle}>
          By using the Musaeid app, you agree to adhere to the following standards
          of professional conduct and ethics in accordance with KSA regulations.
        </Text>

        <CharterSection
          icon="shield-checkmark-outline"
          title="1. Professional Conduct & Ethics"
          text="Maintain the highest level of professionalism and integrity while dealing with clients. Respect privacy and cultural values within the Kingdom."
        />

        <CharterSection
          icon="medkit-outline"
          title="2. KSA Safety Regulations"
          text="Use proper Personal Protective Equipment (PPE) on all job sites to ensure personal and public safety."
        />

        <CharterSection
          icon="cash-outline"
          title="3. Pricing & Honesty"
          text="Transparency in pricing is mandatory. No hidden charges or unauthorized markups on materials."
        />

        <CharterSection
          icon="lock-closed-outline"
          title="4. Data Privacy"
          text="Protection of client data is paramount. Technicians are prohibited from sharing client information."
        />

        <View style={styles.decorBox}>
          <Ionicons name="reader-outline" size={64} color="#1B1B6D" />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.agreeRow} onPress={() => setAgree((a) => !a)}>
          <View style={[styles.checkbox, agree && styles.checkboxOn]}>
            {agree ? <Ionicons name="checkmark" size={15} color="#FFFFFF" /> : null}
          </View>
          <Text style={styles.agreeText}>
            I have read and agree to the Employment Charter and the Professional Conduct standards.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryBtn} onPress={handleContinue}>
          <Text style={styles.primaryBtnText}>Agree & Continue</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CharterSection({ icon, title, text }: any) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name={icon} size={23} color="#1B1B6D" />
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <Text style={styles.sectionText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F6",
  },
  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: "#F3F4F8",
    alignItems: "center",
    justifyContent: "center",
  },
  content: { padding: 24, paddingBottom: 180 },
  iconBox: {
    width: 68,
    height: 68,
    borderRadius: 20,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#1B1B6D",
    marginBottom: 12,
  },
  subtitle: {
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 28,
  },
  section: { marginBottom: 28 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 },
  sectionTitle: { color: "#1B1B6D", fontWeight: "900", fontSize: 17, flex: 1 },
  sectionText: { color: "#6B7280", lineHeight: 22, paddingLeft: 34 },
  decorBox: {
    height: 130,
    borderRadius: 18,
    backgroundColor: "#F7F8FC",
    borderWidth: 1,
    borderColor: "#EEF0F6",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.75,
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEF0F6",
    padding: 18,
    paddingBottom: 28,
  },
  agreeRow: { flexDirection: "row", gap: 10, alignItems: "flex-start", marginBottom: 16 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxOn: { backgroundColor: "#1B1B6D", borderColor: "#1B1B6D" },
  agreeText: { flex: 1, color: "#6B7280", fontSize: 13, lineHeight: 18, fontWeight: "700" },
  primaryBtn: {
    height: 56,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900", fontSize: 16 },
});