import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
            <View style={styles.verifiedBadge}>
              <Ionicons name="checkmark" size={13} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.name}>Abdullah Ahmed</Text>
          <Text style={styles.role}>Verified Technician</Text>

          <View style={styles.infoRow}>
            <Ionicons name="call-outline" size={13} color="#6B7280" />
            <Text style={styles.infoText}>+966 50 123 4567</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="mail-outline" size={13} color="#6B7280" />
            <Text style={styles.infoText}>abdullah@example.com</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNum}>4.9</Text>
            <Text style={styles.statText}>Rating</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNum}>152</Text>
            <Text style={styles.statText}>Jobs Done</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statNum}>3+</Text>
            <Text style={styles.statText}>Years Exp.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Information</Text>

          <View style={styles.chip}>
            <Ionicons name="construct-outline" size={15} color="#1B1B6D" />
            <Text style={styles.chipText}>Plumbing</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Service Areas</Text>

          <View style={styles.areaWrap}>
            <View style={styles.areaChip}>
              <Ionicons name="location-outline" size={14} color="#6B7280" />
              <Text style={styles.areaText}>Dammam</Text>
            </View>

            <View style={styles.areaChip}>
              <Ionicons name="location-outline" size={14} color="#6B7280" />
              <Text style={styles.areaText}>Khobar</Text>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <MenuItem icon="person-outline" title="Edit Profile" />
          <MenuItem icon="star-outline" title="My Ratings" />
          <MenuItem icon="document-text-outline" title="Documents & Verification" />
          <MenuItem icon="wallet-outline" title="Wallet & Payouts" />
          <MenuItem icon="settings-outline" title="Settings" />
          <MenuItem icon="help-circle-outline" title="Help & Support" />

          <TouchableOpacity
            style={styles.logoutItem}
            onPress={() => router.push("/(auth)/login" as any)}
          >
            <View style={styles.logoutIcon}>
              <Ionicons name="log-out-outline" size={21} color="#DC2626" />
            </View>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Home"
          onPress={() => router.push("/(auth)/dashboard" as any)}
        />
        <NavItem
          icon="briefcase-outline"
          label="Jobs"
          onPress={() => router.push("/(auth)/active-jobs" as any)}
        />
        <NavItem
          icon="chatbubble-outline"
          label="Messages"
          onPress={() => router.push("/(auth)/messages" as any)}
        />
        <NavItem
          icon="person"
          label="Profile"
          active
          onPress={() => router.push("/(auth)/profile" as any)}
        />
      </View>
    </View>
  );
}

function MenuItem({ icon, title }: { icon: keyof typeof Ionicons.glyphMap; title: string }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIcon}>
        <Ionicons name={icon} size={21} color="#4B5563" />
      </View>
      <Text style={styles.menuText}>{title}</Text>
      <Ionicons name="chevron-forward" size={18} color="#9AA0A6" />
    </TouchableOpacity>
  );
}

function NavItem({
  icon,
  label,
  active,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={active ? "#1B1B6D" : "#9AA0A6"} />
      <Text style={[styles.navText, active && styles.navTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingBottom: 110,
  },

  header: {
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF0F6",
  },

  headerTitle: {
    textAlign: "center",
    color: "#101828",
    fontSize: 18,
    fontWeight: "900",
  },

  profileSection: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 20,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 999,
    backgroundColor: "#EEEFFD",
    borderWidth: 4,
    borderColor: "#D9D8F0",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#1B1B6D",
    fontSize: 38,
    fontWeight: "900",
  },

  verifiedBadge: {
    position: "absolute",
    right: 0,
    bottom: 3,
    width: 26,
    height: 26,
    borderRadius: 999,
    backgroundColor: "#1B1B6D",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    marginTop: 14,
    fontSize: 22,
    fontWeight: "900",
    color: "#101828",
  },

  role: {
    marginTop: 3,
    color: "#1B1B6D",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  infoText: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EEF0F6",
  },

  statNum: {
    color: "#1B1B6D",
    fontSize: 24,
    fontWeight: "900",
  },

  statText: {
    marginTop: 5,
    color: "#6B7280",
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  section: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  sectionTitle: {
    color: "#9AA0A6",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  chip: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#EEEFFD",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 999,
  },

  chipText: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 13,
  },

  areaWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  areaChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 999,
  },

  areaText: {
    color: "#4B5563",
    fontWeight: "700",
    fontSize: 13,
  },

  menu: {
    paddingHorizontal: 16,
    marginTop: 14,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
  },

  menuIcon: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  menuText: {
    flex: 1,
    color: "#101828",
    fontWeight: "900",
    fontSize: 15,
  },

  logoutItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 16,
    marginTop: 4,
  },

  logoutIcon: {
    width: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  logoutText: {
    color: "#DC2626",
    fontWeight: "900",
    fontSize: 15,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEF0F6",
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 22,
    paddingHorizontal: 8,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    gap: 3,
  },

  navText: {
    color: "#9AA0A6",
    fontSize: 10,
    fontWeight: "900",
  },

  navTextActive: {
    color: "#1B1B6D",
  },
});