import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VerifyPhone() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function handleVerify() {
    if (code.length < 6) {
      alert("Enter the 6-digit code");
      return;
    }

    router.push("/(auth)/professional-details");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Technician Registration</Text>
      </View>

      <View style={styles.progressBox}>
        <View style={styles.progressTop}>
          <View>
            <Text style={styles.stepText}>Step 2 of 4</Text>
            <Text style={styles.progressTitle}>Verify Phone</Text>
          </View>
          <Text style={styles.percent}>50%</Text>
        </View>
        <View style={styles.progressBg}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <Text style={styles.title}>Verify your phone</Text>
      <Text style={styles.subtitle}>
        We sent a 6-digit verification code to <Text style={styles.bold}>+966 5X XXX XXXX</Text>
      </Text>

      <TextInput
        value={code}
        onChangeText={(text) => setCode(text.replace(/[^0-9]/g, "").slice(0, 6))}
        keyboardType="number-pad"
        maxLength={6}
        style={styles.hiddenInput}
        autoFocus
      />

      <View style={styles.otpRow}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View key={index} style={styles.otpBox}>
            <Text style={styles.otpText}>{code[index] || "0"}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.resend}>
        Didn't receive the code? <Text style={styles.link}>Resend in 00:54</Text>
      </Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleVerify}>
          <Text style={styles.primaryBtnText}>Verify & Continue</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>

        <View style={styles.secureRow}>
          <Ionicons name="shield-checkmark-outline" size={14} color="#9AA0A6" />
          <Text style={styles.secureText}>Your data is encrypted and secure</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F8", padding: 18 },
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
  progressBox: { marginBottom: 36 },
  progressTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  stepText: { color: "#1B1B6D", fontSize: 12, fontWeight: "900" },
  progressTitle: { color: "#101828", fontWeight: "900", marginTop: 4 },
  percent: { color: "#6B7280", fontWeight: "700" },
  progressBg: { height: 8, borderRadius: 99, backgroundColor: "#E6E8F0", overflow: "hidden" },
  progressFill: { width: "50%", height: "100%", backgroundColor: "#1B1B6D" },
  title: { fontSize: 28, fontWeight: "900", color: "#101828" },
  subtitle: { color: "#6B7280", marginTop: 12, lineHeight: 22 },
  bold: { color: "#101828", fontWeight: "900" },
  hiddenInput: { height: 1, opacity: 0 },
  otpRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 42 },
  otpBox: {
    width: 46,
    height: 56,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 3,
    borderBottomColor: "#E6E8F0",
    alignItems: "center",
    justifyContent: "center",
  },
  otpText: { fontSize: 20, fontWeight: "900", color: "#101828" },
  resend: { textAlign: "center", color: "#6B7280", marginTop: 28 },
  link: { color: "#1B1B6D", fontWeight: "900" },
  footer: { marginTop: "auto" },
  primaryBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900", fontSize: 16 },
  secureRow: { flexDirection: "row", justifyContent: "center", gap: 6, marginTop: 18 },
  secureText: { color: "#9AA0A6", fontSize: 12, fontWeight: "700" },
});