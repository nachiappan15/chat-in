import React from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"

const RoomActions = (props) => {
    const {id} = useParams();

    // statemanagement
    const [roomData, setRoomData] = React.useState(
        {
            RoomName: "",
            Creator: id,
            Friend:"",
            Messages: []
        }
    )

    const enterData = (e) => {
        setRoomData((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };


    const createRoom = async (event) => {
        event.preventDefault();
        await axios({
            method: "post",
            url: "http://localhost:9000/api/room/new",
            data: roomData,
        })
            .then(function (response) {
                console.log(response);
                var data = response.data;
                if (data) {
                    console.log(data);
                 props.onClickHandler()
                } else {
                    console.log("eror occured");
                }
            })
            .catch(function (error) {
                console.log("error");
            });


    }

    return (
        <>
            <div className='mx-auto my-auto rounded-3xl h-70p w-90 max-w-3xl bg-layer1-600 flex flex-col items-center absolute top-0 left-0 right-0 bottom-0'>
                <h1 className='text-xl font-bold my-3 text-snowWhite'>Room Creation </h1>
                <form className="h-4/6 lg:h-90  w-70p   flex flex-col justify-between   items-center  gap-2 " onSubmit={createRoom}>
                    <div className=' w-full'>
                        <div className='mt-4  w-full gap-2 flex flex-col  '>
                            <label className='font-semibold text-defaultYellow '>Room Name</label>
                            <input
                                type="text"
                                className="w-full h-10  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
                                placeholder="Room Name"
                                name="RoomName"
                                onChange={enterData}
                                required
                            />
                        </div>
                        <div className='mt-4  w-full gap-2 flex flex-col  '>
                            <label className='font-semibold text-defaultYellow '>Friend</label>
                            <input
                                type="text"
                                className="w-full h-10  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
                                placeholder="Friend"
                                onChange={enterData}
                                name="Friend"
                                required
                            />
                        </div>
                    </div>

                    <div className='h-16 w-full mb-4 flex flex-row-reverse items-center gap-5 '>

                        <button
                            onClick={props.onClickHandler}
                            className=" bg-snowWhite text-sm font-bold px-8 py-2 rounded-md hover:scale-110  "
                        > Cancel
                        </button>
                        <button
                            
                            type="submit"
                            className=" bg-defaultYellow text-sm font-bold px-8 py-2 rounded-md hover:scale-110  "
                        > Create
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default RoomActions