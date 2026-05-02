import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleLogin() {
    router.push("/(auth)/otp" as any);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F3F4F8" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.page}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.logoWrap}>
            <View style={styles.logoCircle}>
              <Ionicons name="shield-checkmark" size={26} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Login to continue to Musaeid.</Text>

          <Text style={styles.label}>Email or Phone</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="mail-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
              placeholder="Enter your email or phone"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="lock-closed-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity onPress={() => setShowPass((s) => !s)} style={styles.eyeBtn}>
              <Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={18} color="#9AA0A6" />
            </TouchableOpacity>
          </View>

         <TouchableOpacity
  style={styles.forgotBtn}
  onPress={() => router.push("/(auth)/forgot-password" as any)}
>
  <Text style={styles.forgotText}>Forgot password?</Text>
</TouchableOpacity>

          <TouchableOpacity style={styles.primaryBtn} onPress={handleLogin}>
            <Text style={styles.primaryBtnText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => router.push("/(auth)/signup" as any)}
          >
            <Text style={styles.secondaryBtnText}>Create new account</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.applyBtn}
            onPress={() => router.push("/(auth)/account-details" as any)}
          >
            <Text style={styles.applyText}>Apply to join the technical team</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          By continuing, you agree to Musaeid's{" "}
          <Text style={styles.footerLink}>Terms of Service</Text> and{" "}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    paddingHorizontal: 18,
    paddingTop: 26,
    paddingBottom: 22,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  logoWrap: { alignItems: "center", marginBottom: 12 },
  logoCircle: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#101828",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 18,
    color: "#6B7280",
    textAlign: "center",
    fontSize: 13.5,
  },
  label: {
    marginTop: 10,
    marginBottom: 8,
    color: "#101828",
    fontWeight: "700",
    fontSize: 13,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FBFBFD",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    borderRadius: 14,
    height: 52,
    paddingHorizontal: 12,
  },
  leftIcon: { marginRight: 8 },
  input: {
    flex: 1,
    fontSize: 14.5,
    color: "#101828",
    paddingVertical: 0,
  },
  eyeBtn: {
    paddingLeft: 10,
    height: 52,
    justifyContent: "center",
  },
  forgotBtn: { alignSelf: "flex-end", marginTop: 10 },
  forgotText: { color: "#1B1B6D", fontWeight: "700", fontSize: 12.5 },
  primaryBtn: {
    marginTop: 14,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1B1B6D",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900", fontSize: 16 },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },
  dividerLine: { flex: 1, height: 1, backgroundColor: "#EEF0F6" },
  dividerText: { marginHorizontal: 10, color: "#98A2B3", fontWeight: "800", fontSize: 12 },
  secondaryBtn: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E6E8F0",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtnText: { color: "#101828", fontWeight: "900", fontSize: 15 },
  applyBtn: {
    marginTop: 16,
    alignItems: "center",
  },
  applyText: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 13.5,
  },
  footer: {
    marginTop: 14,
    textAlign: "center",
    color: "#98A2B3",
    fontSize: 11.5,
    paddingHorizontal: 10,
  },
  footerLink: { color: "#1B1B6D", fontWeight: "800" },
});