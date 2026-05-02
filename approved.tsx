import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Approved() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verification Status</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.bigCircle}>
          <View style={styles.innerCircle}>
            <Ionicons name="shield-checkmark" size={82} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.title}>You’re verified!</Text>

        <Text style={styles.subtitle}>
          Your technician account has been approved. You can now receive jobs and start earning.
        </Text>

        <FeatureCard
          icon="briefcase-outline"
          title="Job Board Unlocked"
          subtitle="Access exclusive local service requests"
        />

        <FeatureCard
          icon="cash-outline"
          title="Direct Payouts"
          subtitle="Set up your wallet to receive earnings"
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/(auth)/mithaq" as any)}
        >
          <Text style={styles.primaryBtnText}>Next</Text>
          <Ionicons name="chevron-forward" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FeatureCard({ icon, title, subtitle }: any) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>
        <Ionicons name={icon} size={23} color="#1B1B6D" />
      </View>
      <View>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureSub}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F8" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
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
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  bigCircle: {
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "#EEEFFD",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 34,
  },
  innerCircle: {
    width: 190,
    height: 190,
    borderRadius: 999,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: "#101828",
    textAlign: "center",
  },
  subtitle: {
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: { color: "#101828", fontWeight: "900" },
  featureSub: { color: "#6B7280", fontSize: 12, marginTop: 3 },
  footer: { padding: 24 },
  primaryBtn: {
    height: 56,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900", fontSize: 17 },
});