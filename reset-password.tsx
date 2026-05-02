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

export default function ResetPassword() {
  const router = useRouter();

  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  function handleUpdatePassword() {
    if (newPass.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    alert("Password updated successfully");
    router.push("/(auth)/login" as any);
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
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Security Settings</Text>
        </View>

        <View style={styles.iconBox}>
          <Ionicons name="lock-closed" size={34} color="#FFFFFF" />
        </View>

        <Text style={styles.title}>Create new password</Text>

        <Text style={styles.subtitle}>
          Please ensure your new password is secure and unique.
        </Text>

        <Text style={styles.label}>New password</Text>
        <View style={styles.inputWrap}>
          <Ionicons name="lock-closed-outline" size={19} color="#9AA0A6" />
          <TextInput
            value={newPass}
            onChangeText={setNewPass}
            placeholder="At least 8 characters"
            placeholderTextColor="#9AA0A6"
            secureTextEntry={!showPass}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPass((s) => !s)}>
            <Ionicons
              name={showPass ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#9AA0A6"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirm password</Text>
        <View style={styles.inputWrap}>
          <Ionicons name="shield-checkmark-outline" size={19} color="#9AA0A6" />
          <TextInput
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Repeat new password"
            placeholderTextColor="#9AA0A6"
            secureTextEntry={!showPass}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPass((s) => !s)}>
            <Ionicons
              name={showPass ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#9AA0A6"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.requirementsBox}>
          <Text style={styles.requireTitle}>Password requirements</Text>

          <View style={styles.reqRow}>
            <Ionicons
              name={newPass.length >= 8 ? "checkmark-circle" : "ellipse-outline"}
              size={18}
              color={newPass.length >= 8 ? "#16A34A" : "#CBD5E1"}
            />
            <Text style={styles.reqText}>Minimum 8 characters</Text>
          </View>

          <View style={styles.reqRow}>
            <Ionicons
              name={/[!@#$%^&*(),.?":{}|<>]/.test(newPass) ? "checkmark-circle" : "ellipse-outline"}
              size={18}
              color={/[!@#$%^&*(),.?":{}|<>]/.test(newPass) ? "#16A34A" : "#CBD5E1"}
            />
            <Text style={styles.reqText}>Include at least one special character</Text>
          </View>

          <View style={styles.reqRow}>
            <Ionicons
              name={newPass && newPass === confirmPass ? "checkmark-circle" : "ellipse-outline"}
              size={18}
              color={newPass && newPass === confirmPass ? "#16A34A" : "#CBD5E1"}
            />
            <Text style={styles.reqText}>Passwords match</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryBtn} onPress={handleUpdatePassword}>
          <Text style={styles.primaryBtnText}>Update password</Text>
          <Ionicons name="key-outline" size={19} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.supportText}>
            Having trouble? <Text style={styles.supportLink}>Contact Support</Text>
          </Text>
        </TouchableOpacity>
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
    paddingBottom: 34,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
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

  iconBox: {
    width: 66,
    height: 66,
    borderRadius: 18,
    backgroundColor: "#1B1B6D",
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
    fontSize: 14.5,
    lineHeight: 21,
    marginBottom: 22,
  },

  label: {
    marginTop: 12,
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
    borderColor: "#E6E8F0",
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

  requirementsBox: {
    marginTop: 22,
    backgroundColor: "#EEEFFD",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D9D8F0",
  },

  requireTitle: {
    color: "#1B1B6D",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: 12,
  },

  reqRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },

  reqText: {
    color: "#4B5563",
    fontSize: 13,
    fontWeight: "700",
  },

  primaryBtn: {
    marginTop: 28,
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

  supportText: {
    textAlign: "center",
    marginTop: 18,
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },

  supportLink: {
    color: "#1B1B6D",
    fontWeight: "900",
  },
});