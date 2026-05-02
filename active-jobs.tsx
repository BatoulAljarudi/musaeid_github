import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ActiveJobs() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>My Jobs</Text>

        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="search-outline" size={21} color="#4B5563" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications-outline" size={21} color="#4B5563" />
            <View style={styles.redDot} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/upcoming-jobs" as any)}>
          <Text style={styles.tabText}>Upcoming</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/completed-jobs" as any)}>
          <Text style={styles.tabText}>Completed</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Assigned Today</Text>
            <Text style={styles.statNum}>04</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statLabel}>In Progress</Text>
            <Text style={styles.statNumGreen}>02</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Currently Working</Text>

        <JobCard
          id="#8291"
          status="In Progress"
          type="Repair"
          title="AC Unit Maintenance"
          customer="Ahmed Al-Fahad"
          location="As Sulimaniyah, Riyadh"
          time="Scheduled for 11:00 AM"
          icon="snow-outline"
        />

        <JobCard
          id="#7742"
          status="In Progress"
          type="Electrical"
          title="Electrical Panel Inspection"
          customer="Sarah Al-Saud"
          location="Al Olaya, Riyadh"
          time="Scheduled for 01:30 PM"
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

function JobCard({
  id,
  status,
  type,
  title,
  customer,
  location,
  time,
  icon,
}: {
  id: string;
  status: string;
  type: string;
  title: string;
  customer: string;
  location: string;
  time: string;
  icon: keyof typeof Ionicons.glyphMap;
}) {
  return (
    <View style={styles.jobCard}>
      <View style={styles.imageBox}>
        <View style={styles.statusBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.statusBadgeText}>{status}</Text>
        </View>

        <View style={styles.idBadge}>
          <Text style={styles.idText}>ID: {id}</Text>
        </View>

        <Ionicons name={icon} size={58} color="#1B1B6D" />
      </View>

      <View style={styles.jobBody}>
        <Text style={styles.typeBadge}>{type}</Text>
        <Text style={styles.jobTitle}>{title}</Text>

        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={17} color="#6B7280" />
          <Text style={styles.infoText}>{customer}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={17} color="#6B7280" />
          <Text style={styles.infoText}>{location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={17} color="#6B7280" />
          <Text style={styles.infoText}>{time}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.continueBtn}>
            <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
            <Text style={styles.continueText}>Continue Job</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.directionBtn}>
            <Ionicons name="navigate-outline" size={21} color="#1B1B6D" />
          </TouchableOpacity>
        </View>
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
  screen: {
    flex: 1,
    backgroundColor: "#F3F4F8",
  },

  header: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E6E8F0",
  },

  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#1B1B6D",
  },

  headerIcons: {
    flexDirection: "row",
    gap: 8,
  },

  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 999,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },

  redDot: {
    position: "absolute",
    top: 9,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#EF4444",
  },

  tabs: {
    flexDirection: "row",
    gap: 24,
    paddingHorizontal: 18,
    paddingTop: 12,
    backgroundColor: "#F3F4F8",
  },

  activeTab: {
    paddingBottom: 10,
    borderBottomWidth: 4,
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
  },

  content: {
    padding: 18,
    paddingBottom: 110,
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 18,
  },

  statBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEF0F6",
  },

  statLabel: {
    color: "#6B7280",
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  statNum: {
    marginTop: 5,
    color: "#1B1B6D",
    fontSize: 26,
    fontWeight: "900",
  },

  statNumGreen: {
    marginTop: 5,
    color: "#16A34A",
    fontSize: 26,
    fontWeight: "900",
  },

  sectionTitle: {
    color: "#9AA0A6",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  jobCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#EEF0F6",
    marginBottom: 18,
  },

  imageBox: {
    height: 150,
    backgroundColor: "#EEEFFD",
    alignItems: "center",
    justifyContent: "center",
  },

  statusBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#22C55E",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 99,
    backgroundColor: "#FFFFFF",
  },

  statusBadgeText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 10,
    textTransform: "uppercase",
  },

  idBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
  },

  idText: {
    color: "#1B1B6D",
    fontWeight: "900",
    fontSize: 10,
  },

  jobBody: {
    padding: 16,
  },

  typeBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#EEEFFD",
    color: "#1B1B6D",
    fontSize: 10,
    fontWeight: "900",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    textTransform: "uppercase",
  },

  jobTitle: {
    marginTop: 8,
    fontSize: 19,
    fontWeight: "900",
    color: "#101828",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 10,
  },

  infoText: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },

  actions: {
    marginTop: 18,
    flexDirection: "row",
    gap: 10,
  },

  continueBtn: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#1B1B6D",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },

  continueText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 13,
  },

  directionBtn: {
    width: 48,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D9D8F0",
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