import { useRouter } from "next/router"
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function () {

    const router = useRouter();
    let { roomId } = router.query;
    console.log("Router", roomId);


    const myMeeting = async (element) => {
        const appID = 420313675;
        const serverSecret = "4e15658391c95ef97b72ba46acf80f52";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, "ziametting", Date.now().toString(), roomId);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            }
        })

    }

    return (
        <div> <div
            className="myCallContainer"
            ref={myMeeting}
            style={{ width: '100vw', height: '100vh' }}
        ></div></div>
    )
}
