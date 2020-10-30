import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AvatarImage from '../../components/AvatarImage';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 60 : 40}px;
  padding-top: ${(StatusBar.currentHeight || 0) + 24}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const SignOutButton = styled.TouchableOpacity``;

export const UserAvatarContainer = styled.View`
  margin: 24px 0;
  position: relative;
  align-self: center;
`;

export const UserAvatarButton = styled(RectButton)`
  position: absolute;
  width: 48px;
  height: 48px;
  background: #ff9000;
  border-radius: 24px;
  right: 0px;
  bottom: 0px;
  border: 0px;

  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled(AvatarImage)`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
