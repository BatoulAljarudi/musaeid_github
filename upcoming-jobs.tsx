import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function UpcomingJobs() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{ width: 40 }} />
        <Text style={styles.title}>My Schedule</Text>

        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={21} color="#1B1B6D" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => router.push("/(auth)/active-jobs" as any)}>
          <Text style={styles.tabText}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Upcoming</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/completed-jobs" as any)}>
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={19} color="#9AA0A6" />
        <Text style={styles.searchText}>Search Request ID or service...</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <UpcomingCard
          type="Assigned"
          title="AC Maintenance - Request #ID-8821"
          customer="Ahmed Abdullah"
          location="Al-Rawdah District, Jeddah"
          time="Oct 25, 2023 • 10:00 AM"
          icon="snow-outline"
        />

        <UpcomingCard
          type="Assigned"
          title="Plumbing Repair - Request #ID-7742"
          customer="Sara Al-Saud"
          location="Al-Safa District, Jeddah"
          time="Oct 25, 2023 • 02:30 PM"
          icon="water-outline"
        />

        <UpcomingCard
          type="Assigned"
          title="Electrical Check - Request #ID-6690"
          customer="Mohammed Ali"
          location="Al-Khobar"
          time="Oct 26, 2023 • 09:00 AM"
          icon="flash-outline"
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

function UpcomingCard({
  type,
  title,
  customer,
  location,
  time,
  icon,
}: {
  type: string;
  title: string;
  customer: string;
  location: string;
  time: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={{ flex: 1 }}>
          <Text style={styles.badge}>{type}</Text>
          <Text style={styles.jobTitle}>{title}</Text>
        </View>

        <View style={styles.smallImage}>
          <Ionicons name={icon} size={27} color="#1B1B6D" />
        </View>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="person-outline" size={17} color="#6B7280" />
        <Text style={styles.infoText}>{customer}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="location-outline" size={17} color="#6B7280" />
        <Text style={styles.infoText}>{location}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="calendar-outline" size={17} color="#1B1B6D" />
        <Text style={styles.dateText}>{time}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>View Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.directionBtn}>
          <Ionicons name="navigate-outline" size={21} color="#4B5563" />
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
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8F0",
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "900",
    color: "#101828",
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingTop: 12,
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

  searchBox: {
    margin: 18,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 14,
  },

  searchText: {
    color: "#9AA0A6",
    fontSize: 13.5,
    fontWeight: "600",
  },

  content: {
    paddingHorizontal: 18,
    paddingBottom: 110,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "#EEF0F6",
    marginBottom: 16,
  },

  cardTop: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#EEEFFD",
    color: "#1B1B6D",
    fontSize: 10,
    fontWeight: "900",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 999,
    textTransform: "uppercase",
  },

  jobTitle: {
    marginTop: 9,
    color: "#101828",
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 22,
  },

  smallImage: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
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

  dateText: {
    color: "#1B1B6D",
    fontSize: 13,
    fontWeight: "900",
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },

  primaryBtn: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#1B1B6D",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryBtnText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 13,
  },

  directionBtn: {
    width: 48,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
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