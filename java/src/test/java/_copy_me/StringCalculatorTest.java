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
class StringCalculatorTest {
    @Test
    void add_should_return_0_when_the_input_is_an_empty_string() {
        // arrange
        var stringCalculator = new StringCalculator();

        // act
        var result = stringCalculator.add("");

        // assert
        // assertThat(result, is(0));
    }
}
