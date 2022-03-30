import react from "react";

interface inputProps {
  placeholder: string;
  image: string;
}


export default class Input extends Component<inputProps, {}> {
    render() {
      return (
        <div style={styles.inputContainer}>
          <img
            style={styles.inputIcon}
            src={{
              uri:this.props.image,
            }}
          />
          <text
            placeholder={this.props.placeholder}
          />
        </div>
      );
    }
  }
  
  const styles = StyleSheet.create({
    inputContainer: {
      borderBottomColor: "#F5FCFF",
      backgroundColor: "white",
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    inputText: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: "#FFFFFF",
      flex: 1,
    },
    inputIcon: {
      width: 30,
      height: 30,
      marginLeft: 15,
      justifyContent: "center",
    },
  });