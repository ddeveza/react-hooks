import {useEffect, useState} from "react";

const ListComponent = () => {
    const [photos, setPhotos] = useState<any>([]);
    useEffect(() => {
        const getPhotos = async () =>
            await fetch("https://jsonplaceholder.typicode.com/photos")
                .then((response) => response.json())
                .then((result) => setPhotos(result.slice(0, 10)))
                .catch((error) => console.log("error", error));

        getPhotos();
    }, []);

    return (
        <div className='border-b-2 pb-2 border-gray-500'>
            <h1 className='text-center'> List Component : </h1>
            <div className='flex justify-center items-center space-x-2'>
                {photos?.map((photo: any) => (
                    <img
                        key={photo.id}
                        src={photo.thumbnailUrl}
                        alt={photo.title}
                        className='w-10 h-10'
                    />
                ))}
            </div>
        </div>
    );
};

export default ListComponent;
