/**
 * This is the ContentSkeleton component.
 *
 * @property type - The class skeleton item.
 * @property items - The Number of elements.
 */

type Props = {
  type: string;
  items: number;
};

const ContentSkeleton = ({ type, items }: Props) => {
  return (
    <>
      {[...Array(items)].map((item, index) => (
        <div
          className={"skeleton skeleton__" + type}
          key={index}
          role="listitem"
        />
      ))}
    </>
  );
};

export default ContentSkeleton;
