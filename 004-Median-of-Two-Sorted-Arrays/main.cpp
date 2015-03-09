#include "gtest/gtest.h"

class Solution;

class Solution {
public:
    double findMedianSortedArrays(int A[], int m, int B[], int n) {
        if (m <= 0 && n <= 0) {
            return 0.0;
        } else if (m <= 0 && n > 0) {
            return findMedianInSingleArray(B, n);
        } else if (m > 0 && n <= 0) {
            return findMedianInSingleArray(A, m);
        } else {
            return findMedianSortdArraysRecursively(A, m, B, n, m + n, 0, m);
        }
    }

    double findMedianSortdArraysRecursively(int A[], int m,  int B[], int n, int count, int left, int right) {
        int midA = (left + right) / 2;
        int posB = count / 2 - midA;
        

        return 0.0;
    }

    double findMedianInSingleArray(int A[], int m) {
        if (m % 2 == 0) {
            int highP = m / 2;
            int lowP = highP - 1;

            return static_cast<double>(((A[lowP]) + A[highP]) / 2);
        } else {
            int middle = m / 2;
            return static_cast<double>(A[middle]);
        }
    }
};


TEST(MedianToArray, Test1) {

    { 
        int lengthA = 0;
        int lengthB = 0;
        int* a = nullptr;
        int* b = nullptr;
        //sl->findMedianSortedArrays();
        Solution sl1;
        EXPECT_EQ(0.0, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
    }

    { 
        const int lengthA = 1;
        const int lengthB = 0;
        int* a = new int[lengthA] { 3 };
        int* b = nullptr;
        //sl->findMedianSortedArrays();
        Solution sl1;
        EXPECT_EQ(3, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
    }

    { 
        const int lengthA = 4;
        const int lengthB = 0;
        int* a = new int[lengthA] { 1, 2, 6, 8 }; 
        int* b = nullptr;
        //sl->findMedianSortedArrays();
        Solution sl1;
        EXPECT_EQ(4, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
    }

    { 
        const int lengthA = 0;
        const int lengthB = 1;
        int* b = new int[lengthB] { 3 };
        int* a = nullptr;
        //sl->findMedianSortedArrays();
        Solution sl1;
        EXPECT_EQ(3, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] b;
    }

    { 
        const int lengthA = 0;
        const int lengthB = 4;
        int* b = new int[lengthB] { 1, 2, 6, 8 }; 
        int* a = nullptr;
        //sl->findMedianSortedArrays();
        Solution sl1;
        EXPECT_EQ(4, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] b;
    }

    { 
        const int lengthA = 3;
        const int lengthB = 2;
        int* a = new int[lengthA] { 1, 10, 100 };
        int* b = new int[lengthB] { 101, 10000 }; 

        //sl->findMedianSortedArrays();
        Solution sl1;
        EXPECT_EQ(100, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
        delete[] b;
    }
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest( &argc, argv );
    return RUN_ALL_TESTS();
}
