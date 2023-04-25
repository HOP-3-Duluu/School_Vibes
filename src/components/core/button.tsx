import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components';
import {Plus, BulletL, BulletR} from '../../assets';

const Container = styled.View`
  width: ${props => (props?.width ? props?.width : '')};
  height: ${props => (props?.height ? props?.height : '')};
  background-color: ${props => (props?.bgColor ? props?.bgColor : '#fff')};
  border-radius: ${props => (props?.bRadius ? props?.bRadius : '0px')};
  border: ${props => (props?.borderColor ? props?.borderColor : '')};
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
`;
const Txt = styled.Text`
  color: ${props => (props?.color ? props?.color : '#fff')};
`;
export const Button = ({
  type,
  width,
  height,
  bgColor,
  borderColor,
  bRadius,
  title,
  color,
  size,
}: {
  type: string;
  width: string;
  height: string;
  bgColor: string;
  borderColor: string;
  bRadius: string;
  title: string;
  color: string;
  size: string;
}) => {
  return (
    <View>
      <Container
        bgColor={bgColor}
        bRadius={bRadius}
        width={size == "header" ? "40px" : size == "small" ? "150px" :"340px" }
        height={size == "header" ? "40px" : size == "small" ? "47px" :"50px" }
        borderColor={borderColor}>
        {type == 'add' ? (
          <View style={styles.flex}>
            <View style={styles.icon}>
              <Plus prop={color} />
            </View>
            <View style={styles.icon}>
              <Txt color={color}>{title}</Txt>
            </View>
          </View>
        ) : type == 'left' ? (
          <View style={styles.flex}>
            <View style={styles.icon}>
              <Txt color={color}>{title}</Txt>
            </View>
            <View style={styles.icon}>
              <BulletL prop={color} />
            </View>
          </View>
        ) : type == 'right' ? (
          <View style={styles.flex}>
            <View style={styles.icon}>
              <BulletR prop={color} />
            </View>
            <View style={styles.icon}>
              <Txt color={color}>{title}</Txt>
            </View>
          </View>
        ) : (
          <View style={styles.flex}>
            <View style={styles.icon}>
              <Txt color={color}>{title}</Txt>
            </View>
          </View>
        )}
      </Container>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    padding: 5,
    color: '#fff',
  },
});
export default Button;
