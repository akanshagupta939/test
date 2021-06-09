import styles from "./styles.module.scss";

interface ResumeDate {
  name: string;
  role: string;
  experience: string;
}

const FrontUi = (props: { resumeDate: ResumeDate }) => {
  return (
    <>
      <div className={styles.front_background}>
        <div>
          <h1 className={styles.header}> Hi I am {props.resumeDate.name}.</h1>
          <h3 className={styles.body}>
            I am a {props.resumeDate.role}. I like dabbling in various part of
            front-end development and like to learn new technologies. My skills
            are {props.resumeDate.experience}.
          </h3>
        </div>
      </div>
    </>
  );
};

export default FrontUi;
