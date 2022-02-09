import mitt from "mitt"

type Events = {
    'resizing': any;
    'resized': any;
}

const events = mitt<Events>()
export default events;