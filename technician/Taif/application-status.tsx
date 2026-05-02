import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ApplicationStatus() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color="#1B1B6D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Application Status</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.statusCircle}>
            <Ionicons name="hourglass-outline" size={42} color="#1B1B6D" />
            <View style={styles.stepBadge}>
              <Text style={styles.stepBadgeText}>Step 4/4</Text>
            </View>
          </View>

          <Text style={styles.title}>Verification in progress</Text>

          <View style={styles.pendingPill}>
            <View style={styles.pendingDot} />
            <Text style={styles.pendingText}>Pending review</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Application Journey</Text>

          <JourneyStep title="Account created" subtitle="Completed on Oct 24, 2023" done />
          <JourneyStep title="Professional details" subtitle="HVAC Specialization, 5+ yrs exp" done />
          <JourneyStep title="Documents submitted" subtitle="License, ID & Certifications" done />
          <JourneyStep title="Admin review" subtitle="In progress..." active />
        </View>

        <Text style={styles.sectionTitle}>Submitted Documents</Text>

        <View style={styles.docsRow}>
          <DocBox icon="id-card-outline" title="State_License.pdf" subtitle="Verified identity" />
          <DocBox icon="document-text-outline" title="Cert_HVAC.jpg" subtitle="Master Level" />
        </View>

        <TouchableOpacity style={styles.primaryBtn}>
          <Ionicons name="create-outline" size={17} color="#FFFFFF" />
          <Text style={styles.primaryBtnText}>Edit profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryBtn}>
          <Ionicons name="headset-outline" size={17} color="#1B1B6D" />
          <Text style={styles.secondaryBtnText}>Contact support</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.previewBtn}
          onPress={() => router.push("/(auth)/approved" as any)}
        >
          <Text style={styles.previewText}>Preview Approved</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.previewBtn}
          onPress={() => router.push("/(auth)/rejected" as any)}
        >
          <Text style={styles.previewText}>Preview Rejected</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function JourneyStep({ title, subtitle, done, active }: any) {
  return (
    <View style={styles.stepRow}>
      <View style={[styles.stepIcon, done && styles.stepIconDone, active && styles.stepIconActive]}>
        <Ionicons
          name={done ? "checkmark" : "sync-outline"}
          size={15}
          color={done ? "#FFFFFF" : "#1B1B6D"}
        />
      </View>
      <View>
        <Text style={[styles.stepTitle, active && { color: "#1B1B6D" }]}>{title}</Text>
        <Text style={[styles.stepSub, active && { fontStyle: "italic" }]}>{subtitle}</Text>
      </View>
    </View>
  );
}

function DocBox({ icon, title, subtitle }: any) {
  return (
    <View style={styles.docBox}>
      <View style={styles.docIcon}>
        <Ionicons name={icon} size={22} color="#1B1B6D" />
      </View>
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.docTitle}>{title}</Text>
        <Text style={styles.docSub}>{subtitle}</Text>
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
  content: { padding: 22, paddingBottom: 40 },
  hero: { alignItems: "center", marginBottom: 24 },
  statusCircle: {
    width: 96,
    height: 96,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: "#D9D8F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  stepBadge: {
    position: "absolute",
    bottom: -3,
    right: -10,
    backgroundColor: "#1B1B6D",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  stepBadgeText: { color: "#FFFFFF", fontSize: 10, fontWeight: "900" },
  title: {
    color: "#1B1B6D",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
  },
  pendingPill: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#EEEFFD",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
  },
  pendingDot: {
    width: 8,
    height: 8,
    borderRadius: 99,
    backgroundColor: "#1B1B6D",
  },
  pendingText: { color: "#1B1B6D", fontWeight: "800" },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#EEF0F6",
  },
  cardTitle: {
    color: "#9AA0A6",
    fontWeight: "900",
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 18,
  },
  stepRow: { flexDirection: "row", gap: 12, marginBottom: 20 },
  stepIcon: {
    width: 30,
    height: 30,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#1B1B6D",
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },
  stepIconDone: { backgroundColor: "#1B1B6D" },
  stepIconActive: { backgroundColor: "#EEEFFD" },
  stepTitle: { color: "#101828", fontWeight: "900" },
  stepSub: { color: "#6B7280", fontSize: 12, marginTop: 3 },
  sectionTitle: {
    color: "#9AA0A6",
    fontWeight: "900",
    fontSize: 12,
    textTransform: "uppercase",
    marginTop: 24,
    marginBottom: 12,
  },
  docsRow: { flexDirection: "row", gap: 10 },
  docBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  docIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },
  docTitle: { color: "#101828", fontWeight: "900", fontSize: 11 },
  docSub: { color: "#9AA0A6", fontSize: 10 },
  primaryBtn: {
    marginTop: 24,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  primaryBtnText: { color: "#FFFFFF", fontWeight: "900" },
  secondaryBtn: {
    marginTop: 10,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D9D8F0",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  secondaryBtnText: { color: "#1B1B6D", fontWeight: "900" },
  previewBtn: { marginTop: 12, alignItems: "center" },
  previewText: { color: "#1B1B6D", fontWeight: "900" },
});