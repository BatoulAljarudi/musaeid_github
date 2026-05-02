import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Otp() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function pressDigit(digit: string) {
    if (code.length >= 6) return;
    setCode(code + digit);
  }

  function backspace() {
    setCode(code.slice(0, -1));
  }

  function handleVerify() {
    if (code.length < 6) {
      alert("Enter the 6-digit code");
      return;
    }

    router.push("/(auth)/profile" as any);
  }

  const cells = Array.from({ length: 6 }).map((_, index) => code[index] ?? "");

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={18} color="#111827" />
        </TouchableOpacity>

        <View style={styles.iconCircle}>
          <Ionicons name="shield-checkmark" size={28} color="#1B1B6D" />
        </View>

        <Text style={styles.title}>Verify your identity</Text>
        <Text style={styles.subtitle}>
          Enter the 6-digit code sent to your registered device.
        </Text>

        <View style={styles.row}>
          {cells.map((cell, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.cellText}>{cell ? "•" : ""}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          style={[styles.primaryBtn, code.length < 6 && { opacity: 0.5 }]}
          disabled={code.length < 6}
          onPress={handleVerify}
        >
          <Text style={styles.primaryBtnText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.keypad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.key}
              onPress={() => pressDigit(String(number))}
            >
              <Text style={styles.keyText}>{number}</Text>
            </TouchableOpacity>
          ))}

          <View style={styles.keyEmpty} />

          <TouchableOpacity style={styles.key} onPress={() => pressDigit("0")}>
            <Text style={styles.keyText}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.key} onPress={backspace}>
            <Text style={styles.keyText}>⌫</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setCode("")}>
          <Text style={styles.link}>Resend code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
    justifyContent: "center",
    padding: 18,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 14,
  },

  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    color: "#6B7280",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
    lineHeight: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  cell: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6E8F0",
    backgroundColor: "#FBFBFD",
    alignItems: "center",
    justifyContent: "center",
  },

  cellText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#111827",
  },

  primaryBtn: {
    backgroundColor: "#1B1B6D",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 14,
  },

  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
  },

  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  key: {
    width: "30%",
    height: 54,
    borderRadius: 14,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  keyEmpty: {
    width: "30%",
    height: 54,
    marginBottom: 12,
  },

  keyText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
  },

  link: {
    marginTop: 10,
    textAlign: "center",
    color: "#1B1B6D",
    fontWeight: "800",
  },
});