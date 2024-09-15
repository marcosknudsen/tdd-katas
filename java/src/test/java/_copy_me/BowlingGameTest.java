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
class BowlingGameTest {
    @Test
    void score_should_0_in_gutter_game() {
        // arrange
        var sut = new BowlingGame();

        // act
        for (var i = 0; i < 20; i++) {
            sut.roll(0);
        }

        var score = sut.getScore();

        // assert
        // assertThat(score, is(0));
    }
}
