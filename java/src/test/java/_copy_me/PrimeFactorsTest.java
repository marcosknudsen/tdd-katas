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
class PrimeFactorsTest {
    @Test
    void generate_should_return_empty_array_when_number_is_1() {
        // arrange
        var sut = new PrimeFactors();

        // act
        var result = sut.generate(1);

        // assert
        // assertThat(result.length, is(0));
    }
}
