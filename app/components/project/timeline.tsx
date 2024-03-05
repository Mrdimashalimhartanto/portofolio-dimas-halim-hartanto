import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function TimeLine() {
  return (
    <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography
              variant="h6"
              color="blue-gray"
              className="leading-none"
              placeholder={"Timeline Title Here."}
            >
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              placeholder={"Timeline Body Here."}
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              <img
                className="object-center w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110"
                src="https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg"
                alt="Customer profile user interface"
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              esse sint labore similique pariatur placeat deserunt, cum aut unde
              cupiditate fugit facere commodi recusandae, rerum quos deleniti?
              Exercitationem, aliquam qui?
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography
              variant="h6"
              color="blue-gray"
              className="leading-none"
              placeholder={"Timeline Title Here."}
            >
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              placeholder={"Timeline Body Here"}
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
              children={undefined}
            ></Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography
              variant="h6"
              color="blue-gray"
              className="leading-none"
              placeholder={"Timeline Title Here."}
            >
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              placeholder={"Timeline Body Here"}
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
              children={undefined}
            ></Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
