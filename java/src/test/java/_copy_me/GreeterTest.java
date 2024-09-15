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
class GreeterTest {
    @Test
    void greet_should_return_Hello_name() {
        // arrange
        var greeter = new Greeter();

        // act
        var result = greeter.greet("Mauro");

        // assert
        // assertThat(result, is("Hello Mauro"));
    }
}
