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

export default function ForgotPassword() {
  const router = useRouter();

  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSendCode() {
    if (method === "phone" && phone.trim() === "") {
      alert("Please enter your phone number");
      return;
    }

    if (method === "email" && email.trim() === "") {
      alert("Please enter your email address");
      return;
    }

    router.push("/(auth)/forgot-otp" as any);
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="#1B1B6D" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Forgot Password</Text>
        </View>

        <View style={styles.iconBox}>
          <Ionicons name="lock-open-outline" size={34} color="#1B1B6D" />
        </View>

        <Text style={styles.title}>Reset your password</Text>

        <Text style={styles.subtitle}>
          Choose your preferred method to receive a verification code for your account.
        </Text>

        <View style={styles.toggleBox}>
          <TouchableOpacity
            style={[styles.toggleBtn, method === "phone" && styles.toggleBtnActive]}
            onPress={() => setMethod("phone")}
          >
            <Text style={[styles.toggleText, method === "phone" && styles.toggleTextActive]}>
              Phone Number
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleBtn, method === "email" && styles.toggleBtnActive]}
            onPress={() => setMethod("email")}
          >
            <Text style={[styles.toggleText, method === "email" && styles.toggleTextActive]}>
              Email Address
            </Text>
          </TouchableOpacity>
        </View>

        {method === "phone" ? (
          <>
            <Text style={styles.label}>Phone Number</Text>

            <View style={styles.inputWrap}>
              <Ionicons name="call-outline" size={19} color="#9AA0A6" />
              <TextInput
                value={phone}
                onChangeText={setPhone}
                placeholder="+966 5X XXX XXXX"
                placeholderTextColor="#9AA0A6"
                keyboardType="phone-pad"
                style={styles.input}
              />
            </View>

            <Text style={styles.helpText}>We'll send a 6-digit code via SMS.</Text>
          </>
        ) : (
          <>
            <Text style={styles.label}>Email Address</Text>

            <View style={styles.inputWrap}>
              <Ionicons name="mail-outline" size={19} color="#9AA0A6" />
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="name@example.com"
                placeholderTextColor="#9AA0A6"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />
            </View>

            <Text style={styles.helpText}>We'll send a 6-digit code to your email.</Text>
          </>
        )}

        <View style={styles.footer}>
          <TouchableOpacity style={styles.primaryBtn} onPress={handleSendCode}>
            <Text style={styles.primaryBtnText}>Send Code</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/(auth)/login" as any)}>
            <Text style={styles.backLoginText}>
              Back to <Text style={styles.link}>Log In</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.supportBox}>
            <Ionicons name="headset-outline" size={15} color="#6B7280" />
            <Text style={styles.supportText}>
              Need help? <Text style={styles.link}>Contact Support</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  content: {
    flexGrow: 1,
    padding: 18,
    paddingBottom: 28,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 34,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    marginRight: 44,
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },

  iconBox: {
    width: 66,
    height: 66,
    borderRadius: 18,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#101828",
    marginBottom: 10,
  },

  subtitle: {
    color: "#6B7280",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 24,
  },

  toggleBox: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#EEEFFD",
    borderWidth: 1,
    borderColor: "#D9D8F0",
    padding: 4,
    flexDirection: "row",
    marginBottom: 22,
  },

  toggleBtn: {
    flex: 1,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },

  toggleBtnActive: {
    backgroundColor: "#FFFFFF",
  },

  toggleText: {
    color: "#6B7280",
    fontWeight: "800",
    fontSize: 13,
  },

  toggleTextActive: {
    color: "#1B1B6D",
  },

  label: {
    marginTop: 6,
    marginBottom: 8,
    color: "#101828",
    fontWeight: "800",
    fontSize: 13.5,
  },

  inputWrap: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D8F0",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    color: "#101828",
    fontSize: 14.5,
  },

  helpText: {
    color: "#9AA0A6",
    fontSize: 12,
    marginTop: 8,
    marginLeft: 4,
    fontWeight: "700",
  },

  footer: {
    marginTop: "auto",
    paddingTop: 28,
  },

  primaryBtn: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    shadowColor: "#1B1B6D",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },

  backLoginText: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 22,
    fontSize: 13.5,
    fontWeight: "700",
  },

  link: {
    color: "#1B1B6D",
    fontWeight: "900",
  },

  supportBox: {
    marginTop: 24,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  supportText: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
  },
});