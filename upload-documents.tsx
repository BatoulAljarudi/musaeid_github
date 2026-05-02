import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function UploadDocuments() {
  const router = useRouter();

  const [nationalId, setNationalId] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [cv, setCv] = useState(false);

  function handleSubmit() {
    if (!nationalId) {
      alert("National ID is required");
      return;
    }

    router.push("/(auth)/success");
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={22} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Verification</Text>
        </View>

        <View style={styles.progressBox}>
          <View style={styles.progressTop}>
            <Text style={styles.progressTitle}>Upload Documents</Text>

            <View style={styles.stepRow}>
              <Text style={styles.stepCurrent}>4</Text>
              <Text style={styles.stepTotal}>/ 4</Text>
            </View>
          </View>

          <View style={styles.progressBg}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <Text style={styles.title}>Upload Verification Documents</Text>
        <Text style={styles.subtitle}>
          Final step to verify your professional identity.
        </Text>

        <DocumentCard
          title="National ID"
          badge="Required"
          name="National ID Card"
          desc="Tap to upload front and back of your valid ID card"
          icon="card-outline"
          uploaded={nationalId}
          onPress={() => setNationalId(true)}
        />

        <DocumentCard
          title="Professional Certificate"
          name="Certificate / License"
          desc="Provide your most recent professional accreditation"
          icon="document-text-outline"
          uploaded={certificate}
          onPress={() => setCertificate(true)}
        />

        <DocumentCard
          title="CV / Resume"
          name="CV / Resume"
          desc="Attach your most recent CV or professional profile"
          icon="newspaper-outline"
          uploaded={cv}
          onPress={() => setCv(true)}
        />
      </ScrollView>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleSubmit}>
          <Text style={styles.primaryBtnText}>Submit for review</Text>
          <Ionicons name="send" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DocumentCard({
  title,
  badge,
  name,
  desc,
  icon,
  uploaded,
  onPress,
}: {
  title: string;
  badge?: string;
  name: string;
  desc: string;
  icon: keyof typeof Ionicons.glyphMap;
  uploaded: boolean;
  onPress: () => void;
}) {
  return (
    <View style={styles.docSection}>
      <View style={styles.docHeader}>
        <Text style={styles.docTitle}>{title}</Text>

        {badge ? <Text style={styles.badge}>{badge}</Text> : null}
      </View>

      <View style={styles.docCard}>
        <View style={styles.docLeft}>
          <Text style={styles.docName}>{name}</Text>

          <Text style={styles.docDesc}>{desc}</Text>

          <TouchableOpacity
            style={[styles.uploadBtn, uploaded && styles.uploadBtnDone]}
            onPress={onPress}
          >
            <Ionicons
              name={uploaded ? "checkmark-circle" : "cloud-upload-outline"}
              size={18}
              color={uploaded ? "#FFFFFF" : "#1B1B6D"}
            />

            <Text
              style={[
                styles.uploadText,
                uploaded && styles.uploadTextDone,
              ]}
            >
              {uploaded ? "Uploaded" : "Upload"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.preview}>
          <Ionicons name={icon} size={30} color="#1B1B6D" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  content: {
    padding: 18,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
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

  progressBox: {
    marginBottom: 22,
  },

  progressTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  progressTitle: {
    color: "#101828",
    fontWeight: "900",
    fontSize: 15,
  },

  stepRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  stepCurrent: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 14,
  },

  stepTotal: {
    color: "#9AA0A6",
    fontWeight: "800",
    fontSize: 14,
    marginLeft: 3,
  },

  progressBg: {
    height: 8,
    backgroundColor: "#E6E8F0",
    borderRadius: 99,
    overflow: "hidden",
  },

  progressFill: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1B1B6D",
  },

  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#101828",
    marginBottom: 6,
  },

  subtitle: {
    color: "#6B7280",
    fontSize: 13.5,
    marginBottom: 18,
  },

  docSection: {
    marginBottom: 18,
  },

  docHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },

  docTitle: {
    fontSize: 15.5,
    fontWeight: "900",
    color: "#101828",
  },

  badge: {
    backgroundColor: "#FEE2E2",
    color: "#DC2626",
    fontSize: 10,
    fontWeight: "900",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },

  docCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    gap: 12,
  },

  docLeft: {
    flex: 1,
  },

  docName: {
    fontSize: 15,
    fontWeight: "900",
    color: "#101828",
  },

  docDesc: {
    color: "#6B7280",
    fontSize: 12.5,
    marginTop: 4,
    lineHeight: 18,
  },

  uploadBtn: {
    marginTop: 12,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#EEEFFD",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  uploadBtnDone: {
    backgroundColor: "#1B1B6D",
  },

  uploadText: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 13,
  },

  uploadTextDone: {
    color: "#FFFFFF",
  },

  preview: {
    width: 90,
    borderRadius: 12,
    backgroundColor: "#F3F4F8",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 18,
    backgroundColor: "#F3F4F8",
    borderTopWidth: 1,
    borderTopColor: "#E6E8F0",
  },

  primaryBtn: {
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
});