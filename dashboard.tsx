import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Welcome back 👋</Text>
            <Text style={styles.name}>Abdullah</Text>
          </View>

          <TouchableOpacity style={styles.notification}>
            <Ionicons name="notifications-outline" size={22} color="#1B1B6D" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatBox title="Active Jobs" value="4" />
          <StatBox title="Earnings" value="SAR 2,450" />
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.actionsRow}>
          <ActionBox
            icon="briefcase-outline"
            title="My Jobs"
            onPress={() => router.push("/(auth)/active-jobs" as any)}
          />

          <ActionBox
            icon="chatbubble-outline"
            title="Messages"
            onPress={() => router.push("/(auth)/messages" as any)}
          />

          <ActionBox
            icon="person-outline"
            title="Profile"
            onPress={() => router.push("/(auth)/profile" as any)}
          />
        </View>

        {/* Current Job */}
        <Text style={styles.sectionTitle}>Current Job</Text>

        <View style={styles.jobCard}>
          <Text style={styles.jobTitle}>AC Maintenance</Text>

          <View style={styles.jobRow}>
            <Ionicons name="person-outline" size={16} color="#6B7280" />
            <Text style={styles.jobText}>Ahmed Al-Fahad</Text>
          </View>

          <View style={styles.jobRow}>
            <Ionicons name="location-outline" size={16} color="#6B7280" />
            <Text style={styles.jobText}>Riyadh</Text>
          </View>

          <View style={styles.jobRow}>
            <Ionicons name="time-outline" size={16} color="#6B7280" />
            <Text style={styles.jobText}>11:00 AM</Text>
          </View>

          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Continue Job</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" label="Home" active />
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
          icon="person-outline"
          label="Profile"
          onPress={() => router.push("/(auth)/profile" as any)}
        />
      </View>
    </View>
  );
}

/* Components */

function StatBox({ title, value }: any) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );
}

function ActionBox({ icon, title, onPress }: any) {
  return (
    <TouchableOpacity style={styles.actionBox} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#1B1B6D" />
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
}

function NavItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={active ? "#1B1B6D" : "#9AA0A6"} />
      <Text style={[styles.navText, active && { color: "#1B1B6D" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

/* Styles */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcome: {
    color: "#6B7280",
  },

  name: {
    fontSize: 22,
    fontWeight: "900",
    color: "#101828",
  },

  notification: {
    backgroundColor: "#EEEFFD",
    padding: 10,
    borderRadius: 12,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
  },

  statValue: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1B1B6D",
  },

  statTitle: {
    color: "#6B7280",
    marginTop: 4,
  },

  sectionTitle: {
    marginTop: 24,
    fontWeight: "900",
    color: "#9AA0A6",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  actionBox: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    width: "30%",
  },

  actionText: {
    marginTop: 6,
    fontWeight: "700",
    fontSize: 12,
  },

  jobCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    marginTop: 12,
  },

  jobTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 10,
  },

  jobRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 6,
  },

  jobText: {
    color: "#6B7280",
  },

  primaryBtn: {
    backgroundColor: "#1B1B6D",
    marginTop: 14,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  navItem: {
    flex: 1,
    alignItems: "center",
  },

  navText: {
    fontSize: 11,
    color: "#9AA0A6",
  },
});