import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function CompletedJobs() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>My Jobs</Text>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={21} color="#4B5563" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => router.push("/(auth)/active-jobs" as any)}>
          <Text style={styles.tabText}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/upcoming-jobs" as any)}>
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Completed</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <CompletedCard
          id="REQ-8291"
          title="AC Maintenance Service"
          customer="Sarah Johnson"
          date="Oct 24, 2023 • 10:30 AM"
          icon="snow-outline"
        />

        <CompletedCard
          id="REQ-7742"
          title="Emergency Electrical Repair"
          customer="Michael Chen"
          date="Oct 22, 2023 • 02:15 PM"
          icon="flash-outline"
        />

        <CompletedCard
          id="REQ-6653"
          title="Plumbing Sink Repair"
          customer="Layla Omar"
          date="Oct 20, 2023 • 06:00 PM"
          icon="water-outline"
        />
      </ScrollView>

      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Home"
          onPress={() => router.push("/(auth)/dashboard" as any)}
        />
        <NavItem icon="briefcase" label="Jobs" active />
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

function CompletedCard({
  id,
  title,
  customer,
  date,
  icon,
}: {
  id: string;
  title: string;
  customer: string;
  date: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Ionicons name={icon} size={58} color="#1B1B6D" />

        <View style={styles.completedBadge}>
          <Ionicons name="checkmark-circle" size={13} color="#FFFFFF" />
          <Text style={styles.completedBadgeText}>Completed</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.idText}>{id}</Text>
        <Text style={styles.jobTitle}>{title}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={16} color="#6B7280" />
          <Text style={styles.infoText}>{customer}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={16} color="#6B7280" />
          <Text style={styles.infoText}>{date}</Text>
        </View>

        <TouchableOpacity style={styles.detailsBtn}>
          <Text style={styles.detailsText}>View Receipt & Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function NavItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color={active ? "#1B1B6D" : "#9AA0A6"} />
      <Text style={[styles.navText, active && styles.navTextActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F4F8" },

  header: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#101828",
  },

  iconBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EEF0F6",
    alignItems: "center",
    justifyContent: "center",
  },

  tabs: {
    flexDirection: "row",
    gap: 28,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8F0",
  },

  activeTab: {
    paddingBottom: 12,
    borderBottomWidth: 3,
    borderBottomColor: "#1B1B6D",
  },

  activeTabText: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 14,
  },

  tabText: {
    color: "#6B7280",
    fontWeight: "800",
    fontSize: 14,
    paddingBottom: 12,
  },

  content: {
    padding: 18,
    paddingBottom: 110,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E6E8F0",
    marginBottom: 18,
  },

  imageBox: {
    height: 170,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },

  completedBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#16A34A",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  completedBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  cardBody: {
    padding: 16,
  },

  idText: {
    color: "#1B1B6D",
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: 4,
  },

  jobTitle: {
    color: "#101828",
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 8,
  },

  infoText: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },

  detailsBtn: {
    marginTop: 16,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },

  detailsText: {
    color: "#101828",
    fontWeight: "900",
    fontSize: 13,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#EEF0F6",
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 22,
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