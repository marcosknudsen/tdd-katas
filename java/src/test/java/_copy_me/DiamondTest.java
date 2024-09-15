package rename_me;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
class DiamondTest {
    @Test
    void print_should_return_a_simple_A_when_supplied_letter_is_A() {
        // arrange
        var diamond = new Diamond();

        // act
        var result = diamond.print("A");

        // assert
        // assertThat(result, is("A"));
    }
};
