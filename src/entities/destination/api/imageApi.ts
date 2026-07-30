import {useQuery} from "@tanstack/react-query";

export const getDestinationImage = () => {
    useQuery({
        queryKey: ['destination-image'],
        queryFn: async () => {
            return fetch("https://images.pexels.com/photos/34412080/pexels-photo-34412080.jpeg?auto=compress&cs=tinysrgb&h=350")
        }
    })
}