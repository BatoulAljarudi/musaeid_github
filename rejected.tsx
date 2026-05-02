import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Rejected() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#1B1B6D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Application Status</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.statusPill}>
          <Ionicons name="close-circle" size={15} color="#DC2626" />
          <Text style={styles.statusText}>Rejected</Text>
        </View>

        <View style={styles.illustration}>
          <Ionicons name="document-text-outline" size={95} color="#C4C3E8" />
          <View style={styles.redMark}>
            <Ionicons name="close" size={24} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.title}>Verification rejected</Text>

        <Text style={styles.subtitle}>
          We couldn't verify your technician credentials based on the documents provided.
          Please review the reason below and re-submit your materials for review.
        </Text>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/(auth)/upload-documents" as any)}
        >
          <Text style={styles.primaryBtnText}>Re-submit documents</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Text style={styles.secondaryBtnText}>Contact support</Text>
        </TouchableOpacity>

        <Text style={styles.reasonTitle}>Rejection Reason</Text>

        <View style={styles.reasonCard}>
          <View style={styles.reasonIcon}>
            <Ionicons name="alert-circle-outline" size={26} color="#DC2626" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.reasonName}>Incomplete Documentation</Text>
            <Text style={styles.reasonDesc}>
              The uploaded photo of your professional license was blurry and the expiration
              date was not visible. Please ensure all details are clear and legible.
            </Text>

            <View style={styles.infoRow}>
              <Ionicons name="information-circle-outline" size={17} color="#1B1B6D" />
              <Text style={styles.infoText}>View document requirements</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F8" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8F0",
  },
  backBtn: {
    width: 42,
    height: 42,
    borderRadius: 999,
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
    color: "#101828",
  },
  content: { padding: 24, alignItems: "center", paddingBottom: 40 },
  statusPill: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    alignItems: "center",
    marginBottom: 22,
  },
  statusText: {
    color: "#DC2626",
    fontWeight: "900",
    fontSize: 12,
    textTransform: "uppercase",
  },
  illustration: {
    width: "100%",
    maxWidth: 330,
    aspectRatio: 1,
    borderRadius: 22,
    backgroundColor: "#EEEFFD",
    borderWidth: 1,
    borderColor: "#D9D8F0",
    alignItems: "center",
    justifyContent: "center",
  },
  redMark: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#EF4444",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 26,
    fontSize: 24,
    fontWeight: "900",
    color: "#101828",
    textAlign: "center",
  },
  subtitle: {
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 10,
  },
  primaryBtn: {
    width: "100%",
    marginTop: 24,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900" },
  secondaryBtn: {
    width: "100%",
    marginTop: 10,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryBtnText: { color: "#1B1B6D", fontWeight: "900" },
  reasonTitle: {
    alignSelf: "flex-start",
    marginTop: 34,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "900",
    color: "#101828",
  },
  reasonCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    flexDirection: "row",
    gap: 12,
  },
  reasonIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FEF2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  reasonName: { color: "#101828", fontWeight: "900", fontSize: 15 },
  reasonDesc: { color: "#6B7280", marginTop: 5, lineHeight: 19, fontSize: 13 },
  infoRow: {
    borderTopWidth: 1,
    borderTopColor: "#EEF0F6",
    marginTop: 14,
    paddingTop: 12,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  infoText: { color: "#1B1B6D", fontWeight: "900", fontSize: 12 },
});