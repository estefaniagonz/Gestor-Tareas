import { useContext } from "react";
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTask } from '../../Layouts/ContainerTask/ContainerTask';
import { ItemTask } from '../../ItemTask/ItemTask'; 
import { TaskContext } from '../../Context/Context'; 
import { NewTask } from "../../NewTask/NewTask";
import { InfoTasks } from "../../Layouts/InfoTasks/infoTasks";
import { FilterTasks } from "../../FilterTasks/FilterTasks";

export const Home = () => {
  const { filteredTasks } = useContext(TaskContext);

  return (
    <>
      <Header>
      <h1>Gestor de tareas</h1>
      <NewTask/>
      <InfoTasks/>
        </Header>
          <Main>
            <ContainerTask>
            <FilterTasks/>
              {filteredTasks.map(task => (
              <ItemTask 
                key={task.id}
                idTask={task.id}
                content={task.description}
                titleTask={task.title}
              />
              ))}
            </ContainerTask>
       </Main>
    </>
  );
};