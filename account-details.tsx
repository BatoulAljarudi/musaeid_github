import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AccountDetails() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPass, setShowPass] = useState(false);

  function handleNext() {
    if (!name || !phone || !email || !pass || !confirm) {
      alert("Please fill all fields");
      return;
    }

    if (pass !== confirm) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please agree to the terms");
      return;
    }

   router.push("/(auth)/verify-phone" as any);
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Technician Account</Text>
      </View>

      <View style={styles.progressBox}>
        <View style={styles.progressTop}>
          <Text style={styles.progressTitle}>Account Details</Text>
          <Text style={styles.progressText}>Step 1 of 4</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <Text style={styles.title}>Join our technician network</Text>
      <Text style={styles.subtitle}>Fill in your information to start your professional journey with us.</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        placeholderTextColor="#9AA0A6"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.phoneRow}>
        <View style={styles.codeBox}>
          <Text style={styles.codeText}>+966</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="5XXXXXXX"
          placeholderTextColor="#9AA0A6"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="name@example.com"
        placeholderTextColor="#9AA0A6"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordWrap}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Create a strong password"
          placeholderTextColor="#9AA0A6"
          secureTextEntry={!showPass}
          value={pass}
          onChangeText={setPass}
        />
        <TouchableOpacity onPress={() => setShowPass((s) => !s)}>
          <Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={20} color="#9AA0A6" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.passwordWrap}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Repeat your password"
          placeholderTextColor="#9AA0A6"
          secureTextEntry={!showPass}
          value={confirm}
          onChangeText={setConfirm}
        />
        <TouchableOpacity onPress={() => setShowPass((s) => !s)}>
          <Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={20} color="#9AA0A6" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.termsRow} onPress={() => setAgree((a) => !a)}>
        <View style={[styles.checkbox, agree && styles.checkboxOn]}>
          {agree ? <Ionicons name="checkmark" size={14} color="#fff" /> : null}
        </View>
        <Text style={styles.termsText}>
          I agree to the <Text style={styles.link}>Terms of Service</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryBtn} onPress={handleNext}>
        <Text style={styles.primaryBtnText}>Next</Text>
        <Ionicons name="arrow-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F8" },
  content: { padding: 18, paddingBottom: 40 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
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
    fontSize: 17,
    fontWeight: "900",
    color: "#111827",
  },
  progressBox: { marginBottom: 18 },
  progressTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  progressTitle: { fontWeight: "900", color: "#101828" },
  progressText: { color: "#6B7280", fontWeight: "700", fontSize: 13 },
  progressBg: { height: 8, borderRadius: 99, backgroundColor: "#E6E8F0", overflow: "hidden" },
  progressFill: { width: "25%", height: "100%", backgroundColor: "#1B1B6D" },
  title: { fontSize: 24, fontWeight: "900", color: "#101828", marginTop: 10 },
  subtitle: { color: "#6B7280", marginTop: 8, marginBottom: 14, lineHeight: 20 },
  label: { marginTop: 12, marginBottom: 8, color: "#101828", fontWeight: "800", fontSize: 13.5 },
  input: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    paddingHorizontal: 14,
    color: "#101828",
  },
  phoneRow: { flexDirection: "row" },
  codeBox: {
    height: 54,
    paddingHorizontal: 14,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: "#E6E8F0",
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: { color: "#4B5563", fontWeight: "800" },
  phoneInput: {
    flex: 1,
    height: 54,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    paddingHorizontal: 14,
    color: "#101828",
  },
  passwordWrap: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: { flex: 1, color: "#101828" },
  termsRow: { flexDirection: "row", gap: 10, marginTop: 16, alignItems: "flex-start" },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  checkboxOn: { backgroundColor: "#1B1B6D", borderColor: "#1B1B6D" },
  termsText: { flex: 1, color: "#6B7280", lineHeight: 19, fontSize: 12.5 },
  link: { color: "#1B1B6D", fontWeight: "900" },
  primaryBtn: {
    marginTop: 24,
    height: 54,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900", fontSize: 16 },
});