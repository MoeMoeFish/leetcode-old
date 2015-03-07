#include "gtest/gtest.h"

class Solution;

class Solution {
public:
    double findMedianSortedArrays(int A[], int m, int B[], int n) {
        return 0.0;
    }

    double test() {
        return 0.0;
    }
};


TEST(MedianToArray, Test1) {

    EXPECT_EQ(2 + 2, 4);
    //EXPECT_EQ(2 + 3, 4);
    
    
        Solution* sl = new Solution();
        //sl->findMedianSortedArrays();
        EXPECT_EQ(sl->test(), 0.1);
    
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest( &argc, argv );
    return RUN_ALL_TESTS();
}
