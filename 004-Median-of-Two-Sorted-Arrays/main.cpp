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
        
        if (left >= right) {
            return findMedianSortdArraysRecursively(B, n, A, m, count, 0, n - 1);
        }

        if (A[midA] <= B[posB] && A[midA] >= B[posB - 1]) {
            return A[midA];
        } else if (A[mindA] > B[posB]) {
            return findMedianSortdArraysRecursively(A, m, B, n, count, left, midA - 1);
        } else {
            return findMedianSortdArraysRecursively(A, m, B, n, count, midA + 1, right);
        }

        return 0.0;
    }

    double findMedianForOneOther(int A[], int m, int other) {
        if ( m  == 1) {
            return static_cast<double>(A[0] + other) / 2;
        }

       int middleA = m / 2; 

       if (m % 2 == 0) {
           if (other < A[middleA] ) {
               return other > A[middleA - 1] ? other : A[middleA - 1];
           } else {
               return A[middleA];
           }
       } else {
           int smallOne = other;
           if (other < A[middleA]) {
               smallOne  = other > A[middleA - 1] ? other : A[middleA - 1]; 
           } 

           return static_cast<double>(smallOne + A[middleA]) / 2;
       }
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

        Solution sl1;
        EXPECT_EQ(0.0, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
    }

    { 
        const int lengthA = 1;
        const int lengthB = 0;
        int* a = new int[lengthA] { 3 };
        int* b = nullptr;

        Solution sl1;
        EXPECT_EQ(3, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
    }

    { 
        const int lengthA = 4;
        const int lengthB = 0;
        int* a = new int[lengthA] { 1, 2, 6, 8 }; 
        int* b = nullptr;

        Solution sl1;
        EXPECT_EQ(4, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
    }

    { 
        const int lengthA = 0;
        const int lengthB = 1;
        int* b = new int[lengthB] { 3 };
        int* a = nullptr;

        Solution sl1;
        EXPECT_EQ(3, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] b;
    }

    { 
        const int lengthA = 0;
        const int lengthB = 4;
        int* b = new int[lengthB] { 1, 2, 6, 8 }; 
        int* a = nullptr;

        Solution sl1;
        EXPECT_EQ(4, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] b;
    }

    { 
        const int lengthA = 3;
        const int lengthB = 2;
        int* a = new int[lengthA] { 1, 10, 100 };
        int* b = new int[lengthB] { 101, 10000 }; 

        Solution sl1;
        //EXPECT_EQ(100, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
        delete[] b;
    }

    { 
        const int lengthA = 1;
        const int lengthB = 2;
        int* a = new int[lengthA] { 2 };
        int* b = new int[lengthB] { 1, 3 }; 

        Solution sl1;
        EXPECT_EQ(2, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
        delete[] b;
    }

    { 
        const int lengthA = 2;
        const int lengthB = 1;
        int* a = new int[lengthA] { 1, 3};
        int* b = new int[lengthB] { 2 }; 

        Solution sl1;
        EXPECT_EQ(2, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
        delete[] b;
    }

    { 
        const int lengthA = 1;
        const int lengthB = 4;
        int* a = new int[lengthA] { 2 };
        int* b = new int[lengthB] { 1, 3, 4, 5 }; 

        Solution sl1;
        EXPECT_EQ(3, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
        delete[] b;
    }

    { 
        const int lengthA = 1;
        const int lengthB = 3;
        int* a = new int[lengthA] { 1 };
        int* b = new int[lengthB] { 2, 3, 4 }; 

        Solution sl1;
        double expect = static_cast<double>( 2 + 3 ) / 2;
        EXPECT_EQ(expect, sl1.findMedianSortedArrays(a, lengthA, b, lengthB));
        delete[] a;
        delete[] b;
    }
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest( &argc, argv );
    return RUN_ALL_TESTS();
}
