import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Signup() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPass, setShowPass] = useState(false);

  // شرطك: لازم @
  const emailValid = useMemo(() => email.includes("@"), [email]);

  const passValid = useMemo(() => pass.length >= 6, [pass]);
  const confirmValid = useMemo(() => confirm === pass && confirm.length > 0, [confirm, pass]);

  const canSubmit = emailValid && passValid && confirmValid && agree && fullName.trim().length > 0;

  function onCreate() {
    if (!canSubmit) return;
    router.push("/(auth)/otp");
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag" // iOS
        // أي لمسة على الصفحة تقفل الكيبورد (بدون ما تمنع السحب)
        onTouchStart={() => Keyboard.dismiss()}
        // عشان وقت السحب بعد برضو يقفل
        onScrollBeginDrag={() => Keyboard.dismiss()}
      >
        <View style={styles.card}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={18} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.topSmall}>Create account</Text>
          <Text style={styles.title}>Join Musaeid</Text>
          <Text style={styles.subtitle}>
            Fill in your details to get started with{"\n"}your new account.
          </Text>

          {/* Full name */}
          <Text style={styles.label}>Full name</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="person-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="John Doe"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
            />
          </View>

          {/* Phone */}
          <Text style={styles.label}>Phone number</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="call-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+966 5X XXX XXXX"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          {/* Email */}
          <Text style={styles.label}>Email address</Text>
          <View style={[styles.inputWrap, !emailValid && email.length > 0 ? styles.inputError : null]}>
            <Ionicons name="mail-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="example@musaied.com"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {!emailValid && email.length > 0 ? (
            <Text style={styles.errorText}>Email is incomplete</Text>
          ) : null}

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrap}>
            <Ionicons name="lock-closed-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={pass}
              onChangeText={setPass}
              placeholder="••••••••"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
              secureTextEntry={!showPass}
            />
            <TouchableOpacity onPress={() => setShowPass((s) => !s)} style={styles.eyeBtn}>
              <Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={18} color="#9AA0A6" />
            </TouchableOpacity>
          </View>

          {/* Confirm password */}
          <Text style={styles.label}>Confirm password</Text>
          <View style={[styles.inputWrap, !confirmValid && confirm.length > 0 ? styles.inputError : null]}>
            <Ionicons name="key-outline" size={18} color="#9AA0A6" style={styles.leftIcon} />
            <TextInput
              value={confirm}
              onChangeText={setConfirm}
              placeholder="••••••••"
              placeholderTextColor="#9AA0A6"
              style={styles.input}
              secureTextEntry={!showPass}
            />
          </View>

          {!confirmValid && confirm.length > 0 ? (
            <Text style={styles.errorText}>Passwords do not match</Text>
          ) : null}

          {/* Terms */}
          <TouchableOpacity style={styles.termsRow} onPress={() => setAgree((a) => !a)} activeOpacity={0.85}>
            <View style={[styles.checkbox, agree ? styles.checkboxOn : null]}>
              {agree ? <Ionicons name="checkmark" size={14} color="#fff" /> : null}
            </View>

            <Text style={styles.termsText}>
              I agree to the <Text style={styles.link}>Terms &amp; Conditions</Text> and{" "}
              <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </TouchableOpacity>

          {/* Button */}
          <TouchableOpacity
            style={[styles.primaryBtn, !canSubmit ? { opacity: 0.5 } : null]}
            onPress={onCreate}
            disabled={!canSubmit}
          >
            <Text style={styles.primaryBtnText}>Create account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
            <Text style={styles.bottomText}>
              Already have an account? <Text style={styles.link}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* هذا اللي يخلي فيه “نزول وطلوع” حتى لو المحتوى قصير */}
        <View style={{ height: 220 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F8" },

  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 18,
  },

  card: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  topSmall: { textAlign: "center", color: "#111827", fontWeight: "800", marginBottom: 8 },
  title: { fontSize: 28, fontWeight: "900", color: "#101828", textAlign: "center", marginBottom: 8 },
  subtitle: { color: "#6B7280", textAlign: "center", marginBottom: 16, lineHeight: 18, fontSize: 13.5 },

  label: { marginTop: 10, marginBottom: 8, color: "#101828", fontWeight: "700", fontSize: 13 },

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
  inputError: { borderColor: "#FCA5A5" },
  leftIcon: { marginRight: 8 },
  input: { flex: 1, fontSize: 14.5, color: "#101828", paddingVertical: 0 },
  eyeBtn: { paddingLeft: 10, height: 52, justifyContent: "center" },

  errorText: { marginTop: 6, color: "#EF4444", fontSize: 12, fontWeight: "700" },

  termsRow: { flexDirection: "row", alignItems: "flex-start", gap: 10, marginTop: 14 },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  checkboxOn: { backgroundColor: "#1B1B6D", borderColor: "#1B1B6D" },

  termsText: { flex: 1, color: "#6B7280", fontSize: 12.5, lineHeight: 18 },
  link: { color: "#1B1B6D", fontWeight: "900" },

  primaryBtn: {
    marginTop: 16,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900", fontSize: 16 },

  bottomText: { marginTop: 14, textAlign: "center", color: "#98A2B3", fontSize: 12.5, fontWeight: "700" },
});