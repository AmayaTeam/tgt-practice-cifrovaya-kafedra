import React from "react";
import "./Display.css";
import { useToolModuleGroupById } from "../../lib/hooks/tool_module_groups_by_id.ts";

const Display: React.FC = () => {
    const { tool_module_group_by_id, loading, error } = useToolModuleGroupById();
    const img = "data:image/png;base64," + tool_module_group_by_id.image;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    // return (
    //     <div>
    //         <p>Tool Module Name: {tool_module_group_by_id.sn}</p>
    //         <p>Module Type Name: {tool_module_group_by_id.rModuleTypeId.name}</p>
    //         <p>Module Group Name: {tool_module_group_by_id.rModuleTypeId.rModulesGroupId.name}</p>
    //         {/* и так далее */}
    //     </div>
    // );
    return (
        <div className="display-container">
            <div className="display">
                <div className="display-content">
                    <div className="display-content-title">
                        <div className="title">
                            <div className="heading-of-param">
                                <h4 className="heading-of-param">SN :</h4>
                            </div>
                            {/*<div>*/}
                                <input type="text" defaultValue={tool_module_group_by_id.sn}/>
                            {/*</div>*/}
                        </div>
                        <div className="title">
                            <div className="display-content-titles">
                                <div className="title">
                                    <div className="heading-of-param">
                                        <h4 className="heading-of-param">Group :</h4>
                                    </div>
                                    {/*<div>*/}
                                        <input type="text" defaultValue={tool_module_group_by_id.rModuleTypeId.rModulesGroupId.name}/>
                                    {/*</div>*/}
                                </div>
                                <div className="title">
                                    <div className="heading-of-param">
                                        <h4 className="heading-of-param">Module Type :</h4>
                                    </div>
                                    {/*<div>*/}
                                        <input type="text" defaultValue={tool_module_group_by_id.rModuleTypeId.name}/>
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="title">
                            <div className="heading-of-param">
                            <h4 className="heading-of-param">Housing :</h4>
                            </div>
                            {/*<div>*/}
                                <input type="text" defaultValue={tool_module_group_by_id.rModuleTypeId.rModulesGroupId.name + ":" + tool_module_group_by_id.sn}/>
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="display-content-info">
                        <div className="display-content-info-params">
                            <div className="params">
                                <h4>Housing Params</h4>
                                <div className="Housing_params-content">
                                    <div className="parametr">
                                        <p  className="title_parametrs">Length* :</p>
                                        <p className="num_parametrs">{tool_module_group_by_id.dbtlength}</p>
                                        <p className="unit_parametrs" >mm</p>
                                    </div>
                                    <div className="parametr">
                                        <p  className="title_parametrs">Weight :</p>
                                        <p className="num_parametrs">{tool_module_group_by_id.dbtweight}</p>
                                        <p className="unit_parametrs">kg</p>
                                    </div>
                                    <div className="parametr">
                                        <p className="title_parametrs">COMP STR :</p>
                                        <p className="num_parametrs">{tool_module_group_by_id.dbtcompStr}</p>
                                        <p className="unit_parametrs">kg</p>
                                    </div>
                                    <div className="parametr">
                                        <p className="title_parametrs">OD* :</p>
                                        <p className="num_parametrs">{tool_module_group_by_id.dbtmaxOd}</p>
                                        <p className="unit_parametrs">mm</p>
                                    </div>
                                    <div className="parametr">
                                        <p className="title_parametrs">OD Closed :</p>
                                        <p className="num_parametrs">{tool_module_group_by_id.dbtmaxOdCollapsed}</p>
                                        <p className="unit_parametrs">mm</p>
                                    </div>
                                    <div className="parametr">
                                        <p className="title_parametrs">OD Opened :</p>
                                        <p className="num_parametrs">{tool_module_group_by_id.dbtmaxOdOpened}</p>
                                        <p className="unit_parametrs">mm</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                            <div className="params">

                            </div>
                            <div className="params">
                                <h4>Housing Sensors</h4>
                            </div>
                        </div>

                        <div className="display-content-info-image">
                            {/* TODO: Пофиксить с шириной изображения */}
                            <img src={img} width={"100px"} alt={"alter image description"}/>
                            <div className="info-image-buttons">
                                <button>Export Image</button>
                                <button>Import Image</button>
                            </div>
                        </div>
                    </div>
                    <div className="display-content-buttons">
                        <button>Save</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;
