import IntroLayer from '../layers/Intro/index';
import CountdownLayer from '../layers/Countdown/index';
import MVImagesLayer from '../layers/MVImages/index';
import MVGamesLayer from '../layers/MVGames/index';
import MVMapLayer from '../layers/MVMap/index';
import JourneyLayer from '../layers/Journey/index';
import QuizWinnerLayer from '../layers/QuizWinner/index';

export const routes = [
    {
        path: '/countdown',
        component: CountdownLayer,
        name: 'countdown',
        meta: { title: 'COUNTDOWN' }
    },
    {
        path: '/',
        component: IntroLayer,
        name: 'intro',
        meta: { title: 'START' }
    },
    {
        path: '/mv-images',
        component: MVImagesLayer,
        name: 'mv-images',
        meta: { title: 'MV-IMAGES' }
    },
    {
        path: '/mv-games',
        component: MVGamesLayer,
        name: 'mv-games',
        meta: { title: 'MV-GAMES' }
    },    {
        path: '/mv-map',
        component: MVMapLayer,
        name: 'mv-map',
        meta: { title: 'MV-MAP' }
    },    {
        path: '/journey',
        component: JourneyLayer,
        name: 'journey',
        meta: { title: 'JOURNEY TO MV' }
    },
    {
        path: '/quiz-winner',
        component: QuizWinnerLayer,
        name: 'quiz-winner',
        meta: { title: 'QUIZ WINNER' }
    },
    {
        path: '/exit',
        component: IntroLayer,
        name: 'exit',
        meta: { title: 'EXIT' }
    },
]
