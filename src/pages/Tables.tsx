import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableThree';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Product Sub Category" />
      <div className="flex flex-col gap-10">
        <TableThree />
      </div>
    </>
  );
};

export default Tables;
