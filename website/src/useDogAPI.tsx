import { Dog, Range } from './dog';

export function useDogAPI(): () => Promise<Dog> {
    const nextDog = async () => {
        let responseJson;
        do {
            const response = await fetch('https://api.thedogapi.com/v1/images/search');
            responseJson = await response.json();
        } while (responseJson[0]['breeds'][0] === undefined);

        const data = responseJson[0]['breeds'][0];
        console.log(data)
        const dog: Dog = {
            weight: _string_to_range(data['weight']['imperial']),
            height: _string_to_range(data['height']['imperial']),
            name: data['name'],
            bred_for: data['bred_for'],
            breed_group: data['breed_group'],
            life_span: _string_to_range(data['life_span']),
            temperament: data['temperament'],
            image_url: responseJson[0]['url'],
            image_width: responseJson[0]['width'],
            image_height: responseJson[0]['height']
        }

        return dog;
    }


    return nextDog;
}


function _string_to_range(src_string: string): Range {
    const parts: string[] = src_string.split(' ');
    if (parts.length < 3) { return { min: parseInt(parts[0]), max: parseInt(parts[0]) }; }
    const min_value: number = parseInt(parts[0].trim());
    const max_value: number = parseInt(parts[2].trim());
    return { min: min_value, max: max_value };
}