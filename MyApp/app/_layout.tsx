import ManHinhChinh from '@/screen/TruyenCuoi/ManHinhChinh';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DanhSachTruyenCuoi from '@/screen/TruyenCuoi/DanhSachTruyenCuoi';
import ChiTietTruyen from '@/screen/TruyenCuoi/ChiTietTruyen';
import ConTho from '@/screen/TruyenCuoi/ConTho';
import BaiTap1 from '@/screen/baitap/baitap1';
import BaiTap2 from '@/screen/baitap/baitap2';
import GiaoDienDangNhap from '@/screen/lab2/giaodiendangnhap';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {


  return (
    <SafeAreaProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <GiaoDienDangNhap></GiaoDienDangNhap>
    </SafeAreaView>
  </SafeAreaProvider>
  );
}
