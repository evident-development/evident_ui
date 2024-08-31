import { DocsW } from './style';
import { LeftBar } from './leftbar';
import { RightBar } from './rightbar';
import { DocInfo } from './docinfo';

export const Docs = () => {
  return (
    <DocsW>
      <LeftBar />
      <DocInfo />
      <RightBar />
    </DocsW>
  );
};
