import React from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import RoomCard from "../SubComponents/RoomCard"





const CreateRoomElements = (props) => {


    // statemanagement

    const { id } = useParams();

    const [roomData, setRoomData] = React.useState(
        {
            RoomName: "",
            Creator: id,
            Friend: "",
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
            url: "http://localhost:9000/room/new",
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

    return <>
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

    </>
}


const JoinRoomElement = (props) => {
    // const { id } = useParams();

    // statemanagement


    const [roomId, setRoomId] = React.useState("")
    const [FoundRoomData, setFoundRoomData] = React.useState(null)
    const [notFound, setNotFound] = React.useState("")

    const enterData = (e) => {
        setRoomId(e.target.value)
    };

    const FindRoom = async (event) => {
        // console.log(roomI);
        event.preventDefault();
        await axios({
            method: "get",
            url: `http://localhost:9000/room/findRoom/${roomId}`,
        })
            .then(function (response) {
                console.log(response.data.roomData);
                var data = response.data;
                if (data.roomData) {
                    setNotFound("")
                    setFoundRoomData(data.roomData)
                } else {
                    setNotFound(data.message)
                }
            })
            .catch(function (error) {
                console.log("error");
            });


    }


    const FoundRoom = (props) => {

        const { id } = useParams();
        const Join = (roomId) => {
            console.log(roomId)
            console.log(id);


            // await axios({
            //     method: "get",
            //     url: `http://localhost:9000/room/findRoom/${roomId}`,
            // })
            //     .then(function (response) {
            //         console.log(response.data.roomData);
            //         var data = response.data;
            //         if (data.roomData) {
            //             setFoundRoomData(data.roomData)
            //         } else {
            //             setNotFound(data.message)
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log("error");
            //     });
        }

        return <>
            <div className=" w-full lg:px-5 px-2 lg:py-2 py-1 flex  items-center justify-between bg-layer1-600  text-snowWhite rounded-md   cursor-pointer" >
                {/* freined details */}
                <div className="flex gap-16 items-center h-8">
                    <p className="lg:text-lg md:text-sm  text-lg  font-bold ">{props.name}</p>
                    <p className="lg:text-sm md:text-xs text-sm font-medium text-slate-600">{props.RoomId}</p>
                </div>
                <div>
                    <button className=' bg-defaultYellow px-2 py-1 rounded-md text-card font-bold hover:scale-125   text-sm ' onClick={() => Join(props.RoomId)} >
                        Join
                    </button>
                </div>

            </div>
        </>
    }



    return <>
        <form className="h-4/6 lg:h-90  w-70p   flex flex-col    items-center  gap-2 " onSubmit={FindRoom}>
            <div className=' w-full'>
                <div className='mt-4  w-full gap-2 flex flex-col  '>
                    <label className='font-semibold text-defaultYellow '>Room ID</label>
                    <input
                        type="text"
                        className="w-full h-10  bg-layer2 px-4 rounded-md text-defaultYellow outline-none md:font-medium lg:font-semibold"
                        placeholder="Room Id"
                        name="RoomName"
                        onChange={enterData}
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
                > Find
                </button>
            </div>

        </form>
        {/* RoomDisplay */}
        <div className=' w-2/3 h-full rounded-md my-2 bg-layer1-700 flex flex-col gap-1 items-center  px-3 py-2 overflow-hidden'>
            {FoundRoomData && <FoundRoom {...FoundRoomData} />}
            {
                notFound && <span className='text-red-600 text-lg font-medium'>{notFound}</span>
            }
        </div>

    </>

}




const RoomActions = (props) => {
    const [createRoomRender, setCreateRoomRender] = React.useState("CreateRoom");


    const toggleRoomAction = (option) => {

        if (createRoomRender !== option) {
            console.log(option);
            setCreateRoomRender(option)
        }

    }
    // console.log(createRoomRender);





    const ElementToAppear = () => {
        switch (createRoomRender) {
            case "CreateRoom":
                return <CreateRoomElements onClickHandler={props.onClickHandler} />

            case "JoinRoom":
                return <JoinRoomElement onClickHandler={props.onClickHandler} />
            default:
                return <></>

        }
    }

    return (
        <>
            <div className='mx-auto my-auto rounded-3xl h-70p w-90 max-w-3xl bg-layer1-600 flex flex-col items-center absolute top-0 left-0 right-0 bottom-0'>
                <div className='w-full flex  justify-center items-center gap-4 m-4'>
                    <button className={`text-lg font-bold   ${createRoomRender === "CreateRoom" ? "bg-defaultYellow text-card" : "bg-card  text-snowWhite"} px-2 h-8 rounded-md`} onClick={() => toggleRoomAction("CreateRoom")}> Create Room</button>
                    <button className={`text-lg font-bold   ${createRoomRender === "JoinRoom" ? "bg-defaultYellow text-card" : "bg-card  text-snowWhite"} px-2 h-8 rounded-md`} onClick={() => toggleRoomAction("JoinRoom")}> Join Room</button>

                </div>
                <ElementToAppear onClickHandler={props.onClickHandler} />


            </div>
        </>
    )
}

export default RoomActions