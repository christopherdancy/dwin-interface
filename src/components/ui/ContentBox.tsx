import ContentBoxTitle from './ContentBoxTitle';
import cx from 'classnames';

function ContentBox({
  title,
  isLightBackground,
  children,
}: {
  title?: string;
  isLightBackground?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx('rounded-lg p-4 shadow-2xl my-5', {
        'bg-gray-500': isLightBackground,
        'bg-gray-600': !isLightBackground,
      })}
    >
      {title && <ContentBoxTitle>{title}</ContentBoxTitle>}
      <div className="rounded-lg px-1 py-2">{children}</div>
    </div>
  );
}

export default ContentBox;
