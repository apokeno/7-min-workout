
export default class PlayService {
    static prefix = './img/exercises/';
    static videoPrefix = 'https://www.youtube.com/watch?v=';
    
    static camelToKebabCase = (str: string): string => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    
    static imageSrc = (exerciseKey: string, execiseImage?: string): string | null => {
        if (!exerciseKey) {
            return null;
        }
        const image = execiseImage || (PlayService.camelToKebabCase(exerciseKey) + '.svg');
        return `${PlayService.prefix}${image}`;
    }

    static videoUrl = (exerciseKey: string, exerciseVideo?: string): string | null => {
        return exerciseVideo ? `${PlayService.videoPrefix}${exerciseVideo}` : null;
    }
}
