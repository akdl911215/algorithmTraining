package algorithmStudy.optimization.greedy.activitySelection;

import java.util.Arrays;
import java.util.Comparator;

public class ActivitySelection {

    public static void selectActivities(int[] start, int[] end) {
        int n = start.length;

        // Create an array of activities and sort by end times
        int[][] activities = new int[n][2];
        for (int i = 0; i < n; ++i) {
            activities[i][0] = start[i];
            activities[i][1] = end[i];
        }
//        for (int i = 0; i < activities.length; ++i) {
//            System.out.println(Arrays.toString(activities[i]));
//        }

        System.out.println("-------------------");
        Arrays.sort(activities, Comparator.comparingInt(a -> a[1]));
//        for (int i = 0; i < activities.length; ++i) {
//            System.out.println(Arrays.toString(activities[i]));
//        }

        // Select activities
        System.out.print("Selected Activities:");
        int lastEndTime = -1;
        for (int[] activity : activities) {
            if (activity[0] >= lastEndTime) {
                System.out.println("Activity: Start = " + activity[0] + ", End = " + activity[1]);
                lastEndTime = activity[1];
            }
        }
    }
    public static void main(String[] args) {
        int[] start = {1, 3, 0, 5, 8, 5};
        int[] end = {2, 4, 6, 7, 9, 9};
        selectActivities(start, end);
    }
}
