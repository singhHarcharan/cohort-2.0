#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int minSwaps(vector<int>& nums) {
        // Calculate the minimum swaps needed to group all 1s or all 0s
        // together
        int op1 = minSwapsHelper(nums, 0);  // Grouping all 0s together
        int op2 = minSwapsHelper(nums, 1);  // Grouping all 1s together
        return min(op1, op2);
    }

    // Helper function to calculate the minimum swaps required to group all
    // `val` together
    int minSwapsHelper(vector<int>& data, int val) {
        int length = data.size();
        int totalValCount = 0;

        // Count the total number of `val` in the array
        for (int i = length - 1; i >= 0; i--) {
            if (data[i] == val) totalValCount++;
        }

        // If there is no `val` or the array is full of `val`, no swaps are
        // needed
        if (totalValCount == 0 || totalValCount == length) return 0;

        int start = 0, end = 0;
        int maxValInWindow = 0, currentValInWindow = 0;

        // Initial window setup: count the number of `val` in the first window
        // of size `totalValCount`
        while (end < totalValCount) {
            if (data[end++] == val) currentValInWindow++;
        }
        maxValInWindow = max(maxValInWindow, currentValInWindow);

        // Slide the window across the array to find the maximum number of
        // `val` in any window
        while (end < length) {
            if (data[start++] == val) currentValInWindow--;
            if (data[end++] == val) currentValInWindow++;
            maxValInWindow = max(maxValInWindow, currentValInWindow);
        }

        // Minimum swaps are the total `val` minus the maximum found in any
        // window
        return totalValCount - maxValInWindow;
    }
};