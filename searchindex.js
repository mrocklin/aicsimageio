Search.setIndex({docnames:["CHANGELOG","CODE_OF_CONDUCT","CONTRIBUTING","GOVERNANCE","INSTALLATION","MISSION_AND_VALUES","ROADMAP","aicsimageio","aicsimageio.aics_image.AICSImage","aicsimageio.metadata","aicsimageio.readers","aicsimageio.readers.ome_tiff_reader.OmeTiffReader","aicsimageio.readers.reader.Reader","aicsimageio.readers.tiff_reader.TiffReader","aicsimageio.utils","aicsimageio.writers","aicsimageio.writers.ome_tiff_writer.OmeTiffWriter","developer_resources","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["CHANGELOG.rst","CODE_OF_CONDUCT.md","CONTRIBUTING.md","GOVERNANCE.md","INSTALLATION.rst","MISSION_AND_VALUES.md","ROADMAP.md","aicsimageio.rst","aicsimageio.aics_image.AICSImage.rst","aicsimageio.metadata.rst","aicsimageio.readers.rst","aicsimageio.readers.ome_tiff_reader.OmeTiffReader.rst","aicsimageio.readers.reader.Reader.rst","aicsimageio.readers.tiff_reader.TiffReader.rst","aicsimageio.utils.rst","aicsimageio.writers.rst","aicsimageio.writers.ome_tiff_writer.OmeTiffWriter.rst","developer_resources.rst","index.rst","modules.rst"],objects:{"":{aicsimageio:[7,0,0,"-"]},"aicsimageio.aics_image":{AICSImage:[8,1,1,""],imread:[7,5,1,""],imread_dask:[7,5,1,""],imread_xarray:[7,5,1,""],imread_xarray_dask:[7,5,1,""]},"aicsimageio.aics_image.AICSImage":{ReaderClass:[7,2,1,""],SUPPORTED_READERS:[7,2,1,""],__init__:[8,3,1,""],channel_names:[7,4,1,""],current_scene:[7,4,1,""],current_scene_index:[7,4,1,""],dask_data:[7,4,1,""],data:[7,4,1,""],determine_reader:[7,3,1,""],dims:[7,4,1,""],dtype:[7,4,1,""],get_image_dask_data:[7,3,1,""],get_image_data:[7,3,1,""],get_mosaic_tile_position:[7,3,1,""],metadata:[7,4,1,""],mosaic_tile_dims:[7,4,1,""],ome_metadata:[7,4,1,""],physical_pixel_sizes:[7,4,1,""],reader:[7,4,1,""],reader_path:[7,2,1,""],reader_paths:[7,2,1,""],save:[7,3,1,""],scenes:[7,4,1,""],set_scene:[7,3,1,""],shape:[7,4,1,""],xarray_dask_data:[7,4,1,""],xarray_data:[7,4,1,""]},"aicsimageio.dimensions":{DimensionNames:[7,1,1,""],Dimensions:[7,1,1,""]},"aicsimageio.dimensions.DimensionNames":{Channel:[7,2,1,""],MosaicTile:[7,2,1,""],Samples:[7,2,1,""],SpatialX:[7,2,1,""],SpatialY:[7,2,1,""],SpatialZ:[7,2,1,""],Time:[7,2,1,""]},"aicsimageio.dimensions.Dimensions":{items:[7,3,1,""],order:[7,4,1,""],shape:[7,4,1,""]},"aicsimageio.exceptions":{ConflictingArgumentsError:[7,6,1,""],InvalidDimensionOrderingError:[7,6,1,""],UnexpectedShapeError:[7,6,1,""],UnsupportedFileFormatError:[7,6,1,""]},"aicsimageio.metadata":{utils:[9,0,0,"-"]},"aicsimageio.metadata.utils":{bioformats_ome:[9,5,1,""],clean_ome_xml_for_known_issues:[9,5,1,""],dtype_to_ome_type:[9,5,1,""],generate_ome_channel_id:[9,5,1,""],generate_ome_detector_id:[9,5,1,""],generate_ome_image_id:[9,5,1,""],generate_ome_instrument_id:[9,5,1,""],get_dims_and_coords_from_ome:[9,5,1,""],ome_to_numpy_dtype:[9,5,1,""],physical_pixel_sizes:[9,5,1,""],transform_metadata_with_xslt:[9,5,1,""]},"aicsimageio.readers":{array_like_reader:[10,0,0,"-"],bioformats_reader:[10,0,0,"-"],czi_reader:[10,0,0,"-"],default_reader:[10,0,0,"-"],lif_reader:[10,0,0,"-"],ome_tiff_reader:[10,0,0,"-"],reader:[10,0,0,"-"],tiff_reader:[10,0,0,"-"]},"aicsimageio.readers.array_like_reader":{ArrayLikeReader:[10,1,1,""]},"aicsimageio.readers.array_like_reader.ArrayLikeReader":{scenes:[10,4,1,""]},"aicsimageio.readers.bioformats_reader":{BioFile:[10,1,1,""],BioformatsReader:[10,1,1,""],CoreMeta:[10,1,1,""]},"aicsimageio.readers.bioformats_reader.BioFile":{close:[10,3,1,""],core_meta:[10,4,1,""],filename:[10,4,1,""],is_open:[10,4,1,""],ome_metadata:[10,4,1,""],ome_xml:[10,4,1,""],open:[10,3,1,""],set_series:[10,3,1,""],to_dask:[10,3,1,""],to_numpy:[10,3,1,""]},"aicsimageio.readers.bioformats_reader.BioformatsReader":{bioformats_version:[10,3,1,""],ome_metadata:[10,4,1,""],physical_pixel_sizes:[10,4,1,""],scenes:[10,4,1,""]},"aicsimageio.readers.bioformats_reader.CoreMeta":{dimension_order:[10,2,1,""],dtype:[10,2,1,""],is_interleaved:[10,2,1,""],is_rgb:[10,2,1,""],resolution_count:[10,2,1,""],series_count:[10,2,1,""],shape:[10,2,1,""]},"aicsimageio.readers.czi_reader":{CziReader:[10,1,1,""]},"aicsimageio.readers.czi_reader.CziReader":{get_mosaic_tile_position:[10,3,1,""],mapped_dims:[10,4,1,""],ome_metadata:[10,4,1,""],physical_pixel_sizes:[10,4,1,""],scenes:[10,4,1,""]},"aicsimageio.readers.default_reader":{DefaultReader:[10,1,1,""]},"aicsimageio.readers.default_reader.DefaultReader":{FFMPEG_FORMATS:[10,2,1,""],scenes:[10,4,1,""]},"aicsimageio.readers.lif_reader":{LifReader:[10,1,1,""]},"aicsimageio.readers.lif_reader.LifReader":{get_mosaic_tile_position:[10,3,1,""],physical_pixel_sizes:[10,4,1,""],scenes:[10,4,1,""]},"aicsimageio.readers.ome_tiff_reader":{OmeTiffReader:[11,1,1,""]},"aicsimageio.readers.ome_tiff_reader.OmeTiffReader":{__init__:[11,3,1,""],ome_metadata:[10,4,1,""],physical_pixel_sizes:[10,4,1,""],scenes:[10,4,1,""]},"aicsimageio.readers.reader":{Reader:[12,1,1,""]},"aicsimageio.readers.reader.Reader":{__init__:[12,3,1,""],channel_names:[10,4,1,""],current_scene:[10,4,1,""],current_scene_index:[10,4,1,""],dask_data:[10,4,1,""],data:[10,4,1,""],dims:[10,4,1,""],dtype:[10,4,1,""],get_image_dask_data:[10,3,1,""],get_image_data:[10,3,1,""],get_mosaic_tile_position:[10,3,1,""],is_supported_image:[10,3,1,""],metadata:[10,4,1,""],mosaic_dask_data:[10,4,1,""],mosaic_data:[10,4,1,""],mosaic_tile_dims:[10,4,1,""],mosaic_xarray_dask_data:[10,4,1,""],mosaic_xarray_data:[10,4,1,""],ome_metadata:[10,4,1,""],physical_pixel_sizes:[10,4,1,""],scenes:[10,4,1,""],set_scene:[10,3,1,""],shape:[10,4,1,""],xarray_dask_data:[10,4,1,""],xarray_data:[10,4,1,""]},"aicsimageio.readers.tiff_reader":{TiffReader:[13,1,1,""]},"aicsimageio.readers.tiff_reader.TiffReader":{__init__:[13,3,1,""],scenes:[10,4,1,""]},"aicsimageio.transforms":{reshape_data:[7,5,1,""],transpose_to_dims:[7,5,1,""]},"aicsimageio.types":{PhysicalPixelSizes:[7,1,1,""]},"aicsimageio.types.PhysicalPixelSizes":{X:[7,2,1,""],Y:[7,2,1,""],Z:[7,2,1,""]},"aicsimageio.utils":{cached_property:[14,0,0,"-"],dask_proxy:[14,0,0,"-"],io_utils:[14,0,0,"-"]},"aicsimageio.utils.dask_proxy":{DaskArrayProxy:[14,1,1,""]},"aicsimageio.utils.dask_proxy.DaskArrayProxy":{compute:[14,3,1,""]},"aicsimageio.utils.io_utils":{pathlike_to_fs:[14,5,1,""]},"aicsimageio.writers":{ome_tiff_writer:[15,0,0,"-"],timeseries_writer:[15,0,0,"-"],two_d_writer:[15,0,0,"-"],writer:[15,0,0,"-"]},"aicsimageio.writers.ome_tiff_writer":{OmeTiffWriter:[16,1,1,""]},"aicsimageio.writers.ome_tiff_writer.OmeTiffWriter":{__init__:[16,3,1,""],build_ome:[15,3,1,""],save:[15,3,1,""]},"aicsimageio.writers.timeseries_writer":{TimeseriesWriter:[15,1,1,""]},"aicsimageio.writers.timeseries_writer.TimeseriesWriter":{DIM_ORDERS:[15,2,1,""],save:[15,3,1,""]},"aicsimageio.writers.two_d_writer":{TwoDWriter:[15,1,1,""]},"aicsimageio.writers.two_d_writer.TwoDWriter":{DIM_ORDERS:[15,2,1,""],save:[15,3,1,""]},"aicsimageio.writers.writer":{Writer:[15,1,1,""]},"aicsimageio.writers.writer.Writer":{save:[15,3,1,""]},aicsimageio:{aics_image:[7,0,0,"-"],constants:[7,0,0,"-"],dimensions:[7,0,0,"-"],exceptions:[7,0,0,"-"],formats:[7,0,0,"-"],get_module_version:[7,5,1,""],metadata:[9,0,0,"-"],readers:[10,0,0,"-"],transforms:[7,0,0,"-"],types:[7,0,0,"-"],utils:[14,0,0,"-"],writers:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","function","Python function"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:function","6":"py:exception"},terms:{"0":[6,7,8,9,10,15,18],"06":[10,11],"1":[1,7,8,9,10,15,18],"10":[7,15,18],"100":[7,8,15],"100mb":2,"1024":[15,18],"108":0,"109":0,"112":0,"113":0,"116":0,"11th":7,"12":18,"120":0,"122":0,"123":0,"124":0,"126":0,"134":0,"135":0,"136":0,"137":0,"145":0,"148":0,"149":0,"150":[0,7,8],"153":0,"156":0,"157":0,"160":0,"165":0,"169":0,"172":0,"176":0,"180":0,"183":0,"185":0,"187":0,"194":0,"197":0,"198":0,"1st":7,"2":[7,8,10,15],"20":7,"200":[7,8],"201":0,"2016":[10,11],"202":0,"2021":[9,18],"2048":[15,18],"207":0,"208":0,"211":0,"212":0,"215":0,"216":0,"221":0,"224":0,"226":0,"229":0,"231":0,"233":0,"234":0,"235":0,"236":0,"24":15,"240":0,"244":0,"246":0,"247":0,"248":0,"250":0,"253":0,"256":0,"258":0,"260":0,"261":0,"265":0,"270":0,"271":0,"272":0,"273":0,"276":0,"284":0,"285":0,"286":0,"288":0,"289":0,"292":0,"293":0,"294":0,"295":0,"296":0,"297":0,"299":0,"2nd":7,"3":[7,8,10,11,14,15,18],"300":[7,8,15],"30000":[7,8],"305":0,"306":0,"308":0,"310":0,"313":0,"318":0,"319":0,"320":0,"322":0,"324":0,"326":0,"36":0,"38":0,"4":[1,7,9,10,15,18],"40":[7,8],"400":[7,8],"43":0,"44":0,"45000":[7,8],"48":0,"49":0,"4d":18,"5":[7,10,15],"50":15,"512":[15,18],"5d":[7,8,18],"6":[10,15],"624":7,"63":0,"7":14,"70":0,"73":0,"74":0,"75":[0,7],"76":0,"77":0,"8":[7,8,14],"80":0,"81":0,"83":0,"84":0,"85":0,"88":0,"924":7,"94":0,"95":0,"96":0,"97":0,"98":0,"99":0,"abstract":[10,15],"boolean":[7,8,10],"break":[0,5],"case":[2,5,6,10,15,18],"catch":[0,10],"class":[0,7,8,10,11,12,13,14,15,16,18],"default":[0,2,7,8,9,10,11,13,15,18],"do":[0,1,2,3,6,7,8,9,10,18],"export":10,"final":0,"float":[0,7,9,10],"function":[0,2,5,6,7,9,10,14,15,18],"h\u00fcrlimann":0,"import":[0,2,14,18],"int":[7,9,10,15],"long":[3,6],"new":[3,5,6,7,10,17],"public":[1,4],"ram\u00f3n":0,"return":[0,2,7,8,9,10,14,15,18],"short":[2,5,10],"static":[0,7,10,15],"switch":[0,6],"true":[7,8,10,11,14],"try":10,"var":0,"while":[5,6],A:[2,3,7,8,9,10,12,13,14,15,17],As:6,Being:1,By:[3,10,18],For:[1,2,7,10,14,15,18],If:[2,4,7,8,10,11,14,15,17,18],In:[1,5,6,7,9,10,15,18],It:[5,10,12,14],No:[7,9,10],One:9,Or:[4,18],That:15,The:[1,2,4,5,6,7,8,9,10,14,15,18],Then:2,There:18,These:[2,15],To:[2,4,6,10,15],Will:10,With:6,_:5,__array__:14,__getattr__:14,__init__:[8,11,12,13,16],_get_stitched_dask_mosa:2,_get_stitched_mosa:2,_is_supported_imag:2,_read_delai:2,_read_immedi:2,abc:[10,15],abl:6,about:[1,3,5],abov:2,absolut:[7,10],abstractfilesystem:14,abus:1,accept:[1,5,6,10,12],access:[2,5,7,8],accident:0,accomplish:5,accord:3,account:1,across:18,act:[1,18],action:[0,1,2],activ:[3,5],actual:10,ad:[0,3,6,7,10,11,13],adapt:1,add:[0,2,6],addit:[0,2,3,6,10,14,18],addition:[5,6],address:[1,6],admin:0,administr:5,adopt:0,advanc:[1,7,8],after:[0,2,10,18],ag:1,again:14,against:[2,3,9,15],agnost:[5,6],aic:[2,7,9],aics_imag:19,aicsimag:[0,2,7],aicsimageio:[2,3,4,5],aicspylibczi:[0,10],aim:5,alia:[7,10],align:1,alik:5,all:[0,2,3,5,6,7,10,13,15,18],allen:[1,3,6],allencellmodel:[3,4,18],allow:[0,2,3,6,18],alon:10,along:18,alreadi:[6,7,8],also:[5,6,9,10,15,18],alwai:[0,2,4,5,7,10,11,13,18],among:3,amount:5,an:[1,2,3,5,6,7,8,9,10,11,14,15,18],analysi:[3,5],ani:[0,1,2,3,6,7,8,9,10,11,12,13,14,15,18],annot:[7,9,10],anoth:6,answer:[1,6],anyon:3,api:[0,3,5,10,11,13],appear:[1,3],appli:[1,10,13],appoint:1,appreci:2,appropri:[1,7,14],approv:3,ar:[1,2,3,5,6,7,8,9,10,14,18],arbitrari:7,argument:[7,8,15],around:[2,6],arrai:[0,2,5,7,8,9,10,11,13,14,15,18],array_like_read:[7,19],arraylik:[7,8,9,15],arraylikeread:[7,10],arraymethodproxi:14,as_zx_bas:7,ask:3,assert:10,assum:15,asv:[0,2,18],attach:[0,5,6,7,9,10,15],attack:1,attempt:[1,2],attent:1,attr:10,attribut:[7,8,11,12,13,14],author:0,auto:0,automat:[2,10],avail:[1,2,7,9,10,18],avi:10,avoid:10,aw:[0,2],b:[2,7,10],back:[0,2,6,14,18],backend:18,badg:0,bailei:0,ban:1,bare:6,base:[0,2,3,6,7,8,10,14,15,18],baselin:6,becaus:[2,6],becom:[3,6],been:[6,15],befor:[0,2,7,10],begin:6,begun:6,behavior:[1,10,18],behaviour:5,being:[5,6,7,10],believ:[6,17],below:15,benchmark:[0,5,6],benchmark_image_contain:2,best:[1,5,7],better:[0,5,6],between:[0,3],bf:0,bfmemo:10,big:[3,18],big_mosa:[7,8],bio:[5,6,10,18],biofil:[0,10],bioformat:[0,9,10,18],bioformats_jar:[9,10],bioformats_memo_dir:10,bioformats_om:9,bioformats_packag:10,bioformats_read:[7,19],bioformats_vers:10,bioformatsread:[7,10],bit:2,black:0,block:0,bodi:1,bool:[7,8,9,10,11,14],both:[1,3,6,10,18],bound:0,boundari:18,bowden:0,bowdenm:0,branch:2,branch_a:2,branch_b:2,bridg:5,briefli:9,broken:2,brown:[0,3],bsd:18,bstczyx:7,bucket:[15,18],buffer:[10,12],bug:[0,5,6],bugfix:[0,2],build:[0,2,10,12,15,18],build_om:15,built:5,bump:[0,2],bumpvers:0,c00:15,c01:15,c02:15,c10:15,c11:15,c12:15,c1:[7,10],c:[7,8,10,15,18],cach:[0,10,14],cached_properti:[7,19],call:[0,6,10,18],can:[2,3,4,5,6,7,8,10,15,18],cannot:[2,7,9,15],capabl:5,captur:6,care:[3,5],carri:3,casero:0,cast:3,cd:[0,2],cell:[3,6],central:0,certain:[7,8,10,12],cfg:0,chang:[0,2,3,5,6,7,8,10,18],channel:[0,3,7,8,9,10,13,15,18],channel_color:15,channel_id:9,channel_index:15,channel_nam:[7,10,13,15,18],channelid:9,characterist:1,cheap:6,cheapli:7,check:[0,2,7,8,14,17],checkout:[0,2],choos:2,christoph:5,chunk:[0,6,7,8,10,11,13,14,18],chunk_by_dim:10,chunk_dim:[7,8,10,11,13],chunkmap:10,ci:0,cite:18,clarifi:[1,3],classmethod:10,claus:18,clean:[0,9,10,11],clean_metadata:[10,11],clean_ome_xml_for_known_issu:9,cleaned_xml:9,cleanup:0,clone:[2,4],close:[0,5,10,14],cloud:6,cluster:0,co:0,code:[0,2,3,5,6,18],code_of_conduct:0,codecov:0,color:[0,15],com:[2,4,18],combin:[9,10],come:6,command:[0,2,4],comment:[0,1],commit:[0,1,2,3,18],common:[1,5,6,10,18],commonli:9,commun:[1,5,6,7],compar:[2,5,15],comparison:2,compat:[9,15],compil:[10,11,17],complet:[7,10],complex:5,comput:[0,6,7,8,10,14,18],concern:6,concret:3,conda:10,conda_prefix:10,conduct:[5,6],config:0,configur:[0,2],conflict:[0,7],conflictingargumentserror:[7,10],conform:6,consensu:3,consid:1,consist:[3,5,7,8],constant:19,construct:[1,7,8,9,10,11,13],contact:1,contain:[7,9,10,14],content:19,context:[0,7,9,10,14],contextlib:14,contextmanag:14,continu:[2,3,6],contribut:[0,1,3,5,6],contributor:[0,5,6,18],control:5,convers:[5,6,18],convert:[2,5,7,9,15],cookiecutt:0,coord:[0,9],coordin:[5,7,9,10],copi:[0,4],core:[2,5,6,7,8,9,10,14,15],core_meta:10,coremeta:10,corner:18,correct:[0,1,15],could:[1,7],count:15,cours:2,cov:0,coverag:0,creat:[1,2,5,7,9,10,11,13,15],creator:5,cred:0,credenti:2,credit:2,critic:1,cron:0,cross:5,crux:6,ctyx:10,curl:4,current:[2,3,5,7,9,10,15,18],current_scen:[7,10,18],current_scene_index:[7,10],custom:[0,18],cyx:[7,8,15],czi:[0,6,7,8,10,18],czi_read:[7,19],czifil:5,cziread:[0,2,7,10,18],czyx:[7,10,15,18],d:[2,7,10,15],da:[7,10,14],dan:0,daniel:[0,3],dask:[0,2,5,7,8,9,10,11,13,14,15,18],dask_data:[0,7,10,18],dask_proxi:[7,10,19],daskarrayproxi:[10,14],data:[0,2,5,6,7,8,9,10,15,18],data_shap:15,data_typ:15,dataarrai:[2,7,8,10,18],dataset:6,datatyp:9,date:5,deactiv:10,deadlink:0,deadlock:3,deal:[10,12],decid:[3,5,10,12],decis:5,dedic:5,deem:[1,6],default_chunk_dim:[10,11,13],default_dimension_ord:7,default_read:[7,15,19],defaultread:[7,10,15],defin:[1,6],delai:[0,2,5,7,8,10,14],demonstr:3,dep:0,depend:0,deprec:0,depth:[7,10],derivedwrit:15,derogatori:1,describ:[3,6],descript:[0,2],deseri:2,design:[3,6],desir:[7,10],detail:[0,2,6,7,9,10,18],detect:18,detector:9,detector_id:9,determin:[0,1],determine_read:7,dev0:0,dev6:18,dev:[0,2,3],dev_releas:0,develop:[0,2,5,6],dict:[0,9,10],dictionari:10,differ:[1,10,18],digniti:1,dim:[0,7,8,9,10,15,18],dim_ord:[10,13,15,18],dimens:[0,2,8,9,10,11,13,15,18,19],dimension_ord:[0,10,15],dimension_order_out:[7,10],dimensionnam:[7,10,11,13],dimi:0,dimitri:0,dir:0,direct:15,directli:[3,6,7,18],directori:[2,9,10],disabl:[0,1],discuss:[3,6],distinguish:3,distribut:[0,14],doc:[0,10,14],docstr:[0,2,5],document:[0,3,5,17],doe:[0,9,10,11,18],doesn:[0,7,8,10,11,18],doi:0,domain:18,don:[4,14],done:[2,6],doubl:0,down:[7,8],download:[2,4,10],download_test_resourc:2,draft:2,driven:5,drop:14,dtype:[0,7,9,10,15],dtype_to_ome_typ:9,due:[7,15],duplic:[5,6],dure:[2,6,10,11,13],e:[1,2,6,10,13,18],each:[2,7,9,10,15],earlier:[10,11],easi:5,easier:[5,6],easili:[3,6],econom:1,ecosystem:3,edit:[1,2],edu:0,educ:[1,5],effect:14,effici:6,effort:6,either:[4,5,7,8,10,15],electron:1,element:[3,7,9,10],elementtre:9,empathi:1,empti:7,emul:[5,6],en:5,enabl:0,encourag:[3,6],end:6,enforce_exist:14,enough:7,ensur:[0,3,5,10],entir:[0,5,6,7,10],entiti:3,entrant:14,env:0,environ:[1,2,5,10],equip:6,error:[0,9,10,11],et:9,etc:[2,5,6,7,15,18],ethnic:1,etre:[0,9],even:6,event:1,everi:[2,7,14,18],every_oth:[7,10],everyon:1,everyth:0,ex:2,exact:6,exampl:[1,2,5,7,8,9,10,12,15,18],except:[6,8,10,11,15,19],exclud:0,execut:10,exist:[0,3,5,6,14,17],expand:15,expans:[0,5,7],expect:[1,3,15],expens:14,experi:[1,3,6],experiment:14,explain:5,explicit:[1,5],explicitli:[7,8],expos:10,express:1,ext:[7,8,18],extens:7,extent:6,extern:6,extra:[0,5,7,8],extract:[5,6],face:1,fail:[0,3,10,11],fair:1,faith:1,fall:18,fals:[7,8,9,10,14,18],faq:1,fast:6,fault:10,featur:[0,2,5,6],feedback:0,feel:2,few:[6,7,8],ffmpeg:15,ffmpeg_format:10,field:[7,10],fifth:7,file:[0,2,5,7,8,9,10,11,13,14,15,18],file_ctx:14,filenam:10,filenotfounderror:14,filepath:10,filesystem:[14,18],fill:10,find:[3,7,8,14,18],fine:18,finer:18,finish:5,first:[5,6,7,9,10,18],first_and_last:[7,10],first_and_second:[7,10],first_ten_mm_in_i:18,first_ten_mm_in_x:18,first_ten_mm_in_z:18,first_ten_second:18,first_thre:[7,10],fit:18,fix:3,flake8:0,flaw:3,flexibl:6,focu:5,focus:1,follow:[1,2,5,6,10,12,15,18],forc:0,forg:10,fork:2,form:[6,15],formal:3,format:[0,2,5,8,10,15,19],format_implement:2,format_lib:2,fortun:6,foster:[1,6],found:[2,7,10,11,14,18],four:15,fourth:[7,10],fp:15,frame:[3,15,18],framework:6,free:[1,2,18],friendli:6,from:[0,1,2,3,5,6,7,8,9,10,14,15,18],fs:14,fsspec:[7,8,14,18],full:[2,3,14],fulli:[5,6,7,8,10],functool:14,fundament:3,further:1,futur:[3,5,6,10],g:18,gc:18,gcsf:18,gen:0,gender:1,gener:[0,6,7,9,10,15,18],generate_ome_channel_id:9,generate_ome_detector_id:9,generate_ome_image_id:9,generate_ome_instrument_id:9,get:[0,7,10,18],get_channel_nam:0,get_dims_and_coords_from_om:9,get_image_dask_data:[7,8,10,18],get_image_data:[7,8,10,15,18],get_module_vers:7,get_mosaic_tile_posit:[2,7,10,18],getter:0,gh:[0,2],giant:5,gif:[15,18],git:[0,2,4,18],github:[0,2,3,4,18],given:[2,7,9,15],given_dim:7,goal:6,gohlk:5,good:[1,18],govern:5,gracefulli:1,grain:18,grammer:0,great:6,greater:10,greatest:6,greatli:2,greyscal:15,group:3,grow:5,gs:18,guarente:[7,10],guess:[0,5,10,13,15],guid:[3,4,5,6],ha:[3,6,7,10],handl:[2,5,6,7,9,10],happili:6,harass:1,harder:6,harm:1,hash:0,have:[0,1,2,3,4,5,6,7,8,10,15],head:[5,18],held:14,help:[2,3,5,6,18],here:2,hidden:10,high:6,higher:2,highli:6,histor:6,hold:3,hook:2,hope:[5,6],how:[2,3,5,6,7,15],howev:6,html:[0,1,10,14],http:[1,2,4,5,10,14,18],huer:0,i:[2,6,7,10,13,18],id:[7,9,10,13,18],ident:1,ignor:[6,10],imag:[2,5,7,8,9,10,11,12,13,15],image0:15,image1:15,image_id:9,image_index:15,image_nam:15,imagecodec:[0,5],imageid:9,imageio:[5,10,15,18],imagelik:[7,8,10],imageri:1,img:[7,8,10,18],immut:14,impact:3,impl:0,implement:[5,6,10,12,18],importerror:9,improv:6,imread:[0,7],imread_dask:7,imread_xarrai:7,imread_xarray_dask:7,imwrit:15,inappropri:1,includ:[0,1,2,3,10],inclus:[1,5],incompat:7,increasingli:6,incred:6,independ:[7,8,10],index:[0,2,7,9,10,15,18],indexerror:[7,10],indic:[0,7,10],individu:[1,18],influenc:5,inform:[1,2,3,7,8,9,10,17,18],infra:0,inheret:10,inherit:10,ini:0,init:[2,4],initi:[6,7,8,10],input:[7,15],insight:6,instal:[0,2,5,9,10,15],instanc:[1,7,10,14],instanti:[7,8],instead:[5,6,7,8,10],institut:[1,3,6],instruct:0,instrument:9,instrument_id:9,insult:1,integ:[7,10],intend:7,intent:7,interact:3,interest:[1,3,6],interfac:[7,10],intern:[7,8],introduc:5,introduct:5,intuit:5,invalid:[0,10,15],invaliddimensionorderingerror:[7,10],invert:0,involv:3,io:[2,5,14],io_util:[7,19],ioerror:15,is_interleav:10,is_open:10,is_rgb:[10,15],is_supported_imag:10,isn:[7,10,11],issu:[1,3,5,6,9,17],item:[7,10],itemsview:7,iter:[2,7,10],its:[0,1,3,7,15],jackson:[0,3],jacksonmaxfield:0,jami:0,jar:10,java:[5,10],java_hom:10,join:3,josh:0,jpg:15,json:18,just:18,jvmnotfoundexcept:10,keep:6,kei:[10,18],keyword:[7,8],know:[2,7,8],known:[0,9,10,11,18],known_dim:0,kwarg:[7,8,10,11,12,13,14,15],lab:6,label:0,lambert:0,languag:[1,5,6],larg:[6,7,10,18],larger:[2,3,10],last:[7,15],latest:[0,10,11],latter:3,lazi:[7,8],lazy_t0:18,leadership:1,learn:5,leav:5,left:[7,10,18],leica:0,len:[7,10],length:[10,15],let:2,letter:[7,10],level:[0,1,2,6,7],librari:[5,6,10,14,17],lif:[0,6,10,18],lif_read:[7,19],life:14,lifread:[7,10,18],like:[0,2,6,7,8,10,12,14,18],limit:5,link:0,lint:[0,2],linter:0,linux:10,list:[7,8,9,10,11,13,15,17,18],littl:2,live:3,load:[7,8,10,18],loc:18,local:[0,2,6,7,14,15,18],locat:[5,6],loci:10,log:0,look:[5,6],lookup:2,loosen:0,lot:5,low:6,m:[2,7,8,18],mac:[5,10,18],macos11:0,made:[3,7,8],madison:0,magic:5,magic_:5,mai:[1,2,3,7,10,12,14],mail:1,main:[0,2,4,18],maintain:[1,2,3,5,6,17],major:[2,3,5,9,18],make:[0,1,2,5,10,11,18],makefil:0,malformed_metadata:[7,8],manag:[0,3,5,7,10,14],mani:[5,6,10],manipul:5,manual:18,map:[10,13],mapped_dim:10,master:0,match:[7,8,9,10],math:0,matt:0,matter:2,maxfield:0,md:0,mean:6,meant:[5,6],media:1,meet:6,member:[1,3],memo:10,memoiz:10,memori:[0,2,5,6,7,9,10,18],mention:6,mentor:5,merg:3,messag:7,meta:[9,10],metaarraylik:10,metadata:[0,2,5,7,8,10,11,12,15,19],method:[4,5,6,8,10,11,12,13,14,16,18],micromanag:9,micromet:18,micron:15,microscopi:[5,6,7,8,18],millisecond:10,min:0,minim:5,minimum:6,minor:[2,3],miss:[0,7,9,17],mission:[3,6],mkv:[10,15],mode:2,model:[2,5,6,7,9,10,15,18],modul:[0,2,6,18,19],month:6,moor:0,more:[0,2,3,5,6,7,9,10,18],mosaic:[0,2,7,8,10],mosaic_dask_data:[10,18],mosaic_data:10,mosaic_tile_dim:[7,10,18],mosaic_tile_index:[7,10],mosaic_xarray_dask_data:10,mosaic_xarray_data:10,mosaictil:[7,10],most:[2,4,5,6,18],mov:10,move:0,mp4:[10,15],mpeg:10,mpg:10,msg_extra:7,much:[5,6],multi:[0,2,7,15],multipl:[6,10,13,15,18],multiscal:0,must:[6,7,10,14,15],my:[15,18],my_bucket:[7,8],my_fil:[7,8,18],my_many_scen:[7,8],mypi:0,n:[7,9,10],naiv:[7,9],name:[0,2,7,9,10,13,15,18],namedtupl:[7,10],namespac:9,napari:[0,5],nation:1,nativ:10,nativend2:10,natur:[7,10],nd2:10,ndarrai:[2,7,8,9,10,14,15],ndim:10,necessari:[5,14,15],need:[0,2,5,6,7,8,10,15,18],neglig:2,network:[7,8],never:2,newcom:5,nomin:3,nomine:3,non:[0,3,6,10,15],none:[0,2,7,8,10,13,15],normal:[14,18],notabl:5,note:[2,7,8,9,10,11,12,13,15],notic:9,notimplementederror:[2,7,10],noun:0,now:2,np:[7,8,10,18],npdtype:9,number:[0,2,7,10,15],numpi:[2,7,8,9,10,14,15,18],obj:0,object:[0,2,3,6,7,8,9,10,12,14,15,18],objectproxi:14,occasion:3,occur:3,off:[6,10,15,18],offens:1,offici:1,offlin:1,ogg:10,ol:4,old:0,om:[0,2,5,6,7,8,9,10,11,13,15],ome_channel_id:9,ome_detector_id:9,ome_image_id:9,ome_instrument_id:9,ome_metadata:[2,7,10],ome_tiff_read:[7,19],ome_tiff_writ:[7,19],ome_to_numpy_dtyp:9,ome_typ:[7,9,10,15],ome_xml:[10,15],ometiffread:[2,7,10],ometiffwrit:[7,15,18],onc:[4,14],one:[6,7],ones:15,ongo:3,onli:[2,3,6,7,8,15,18],onlin:1,onto:[10,13],open:[1,2,3,5,6,10,14],openjdk:10,openmicroscopi:10,oper:[7,9,10,14,18],opt:[0,5],optim:[0,6],option:[0,7,8,9,10,13,15,18],order:[0,2,7,8,10,15,18],org:[1,5,10,14],orient:1,origin:[2,5,7,10],original_meta:[9,10],os:5,other:[1,2,3,5,9,10,13,15],otherwis:[1,2,10,14],our:[2,3,5,6,17,18],ourselv:6,out:[2,5,6,7,10,18],output:[9,10],outsid:[2,6],over:[0,2,6,7,10],overload:15,overrid:15,own:[6,7,8],packag:[0,5,18,19],pad:7,page:3,pair:[7,10],parallel:5,param:0,paramet:[7,8,9,10,11,12,13,14,15],parametr:2,pars:[0,7,9,10],part:2,particip:[1,3,6],pass:[0,2,7,8,15,18],passthrough:[7,15],patch:[0,2],path:[2,6,7,8,9,10,11,13,14,15,18],pathlib:[7,8,9,10,11,13,14,15],pathlik:[7,9,10,11,13,14,15],pathlike_to_f:14,pattern:2,paul:5,peopl:2,per:[6,15],perceiv:3,perform:[5,6],perman:1,permiss:1,person:1,perspect:3,physic:[0,1,7,9,10,15],physical_pixel_s:[2,7,9,10,15,18],physicalpixels:[7,9,10,15],pictur:3,piec:[9,18],pin:0,pip:[2,4,10,15,18],pixel:[0,2,5,7,9,10,15,18],pixeltyp:9,place:[3,5],plan:[3,6],plane:[9,15],platform:[5,18],pleas:[2,6,7,9,10,17,18],png:[0,15,18],point:[0,7,10],pointer:6,polit:1,populate_tiffdata:0,port:[5,14],portion:18,posit:[0,1,2,7,10],possibl:[3,5,18],post:1,pr:0,practic:[5,7],pre:[0,2,7,8],prefer:[2,4,5,14],preload:[7,10],prep:0,prepar:[0,2],present:[0,7,10,11,13,15],prevent:5,previous:6,primarili:[5,15],prior:[2,9],prioriti:6,privat:[1,3],problem:6,problemat:14,process:[0,4,6,9,10],produc:[5,7,9],profession:1,program:[5,6],progress:3,project:[1,2,3,5,6],properli:0,properti:[0,2,7,8,10,14,18],propos:[0,3,5],proprietari:[5,9,10],prototyp:6,provid:[0,2,5,6,7,8,9,10,11,13,14,15],proxi:14,prune:7,publish:[0,1,2],pull:[0,2,3,9,18],pure:[5,18],purpos:3,push:[0,2],put:[2,15],py38:0,py39:0,py:[2,4],pylibczi:5,pypi:[0,2],pyramid:0,python:[0,2,4,5,6,7,10,14,18],queri:6,question:[1,6],quickli:6,quickstart:0,quilt3distribut:0,quot:0,r:10,race:1,rais:[2,7,9,10,11,14,15],rand:[7,8,15,18],random:[2,7,8,15,18],rang:[7,10],raw:[2,7,10,12],rcasero:0,re:[2,14],reach:[2,3],reactiv:10,read:[0,2,3,5,7,8,10,11,12,15],readabl:5,reader:[0,7,8,14,15,19],reader_nam:7,reader_path:7,readerclass:7,readi:2,readlif:[0,10],readm:[0,2],reason:[1,3,6],recent:4,recogn:[6,7],recommend:[2,7,10],reconstruct:[0,7,8],reconstruct_mosa:[7,8,18],recurs:[2,4],reduc:[7,8,10],reentrant:14,refactor:0,refer:[0,5,9,10,18],referenc:[10,11],regardless:[1,5,6],regularli:5,reject:1,rel:[6,9],relat:[3,18],relationship:6,releas:[0,2,9,18],religion:1,remain:5,remind:2,remot:[0,2,7,8,10,11,14,15,18],remov:[0,1,7,14],renam:0,repeat:15,repercuss:1,replac:[0,10],repo:[2,4],report:[0,1,3],repositori:[2,4,6,18],repres:[1,7,9,10,15],represent:[1,5,6],request:[0,2,3,5,6,7,10,11],requir:[0,2,3,5,6,9,10,14,18],research:6,reshap:7,reshape_data:[7,10],resolut:[2,3],resolution_count:10,resolv:[0,1,2,3],resourc:[0,2,14,18],respect:[0,1],respond:5,result:[3,6,9,10,14,18],retriev:[7,9,10,18],return_dim:7,reusabl:14,revert:0,review:[0,3,6],revis:0,rgb:[0,10,15],rgba:15,right:1,robust:5,role:5,round:[7,8],rst:0,run:[0,2,3,4,5,6,10],run_image_container_check:2,run_multi_scene_image_read_check:2,runner:2,s3:[0,7,8,15,18],s3f:[7,8,18],s:[0,1,2,5,6,7,8,10,11,13,15,18],s_1_t_1_c_10_z_20:[7,10],safe:10,same:[6,7,8,9,10,11,13,15,18],sampl:[0,7,10,11,13,15],save:[0,7,15],sc:3,scalabl:5,scalar:15,scale:[0,6],scene:[0,2,7,8,9,10,15,18],scene_id:[7,10],scene_index:[7,9,10],schema:[6,10,11,15],scienc:[3,6],scientist:6,script:2,search:18,second:[0,15,18],section:0,see:[1,2,6,7,9,10,18],seek:3,seen:15,seg:10,select:[0,2,5,7,10,18],select_scen:7,self:0,semant:5,semver:0,sens:2,sensit:3,sequenc:0,seri:[2,9,10],serial:2,serializ:0,series_count:10,serv:[5,6],servic:18,set:[0,1,2,5,6,7,8,10,15],set_scen:[7,8,10,18],set_seri:10,setid:10,setup:[0,2,4],sex:1,sexual:1,shape:[0,3,7,10,15,18],share:5,sherman:0,shot:0,should:[0,2,3,5,6,7,9,10,11],shoulder:5,show:1,shown:3,shuffl:7,side:6,similar:[6,14,15],simpl:5,simple_typ:9,simpli:[2,6,7,10],simpliest:18,sinc:2,singl:[0,2,7,10,13,14,15],size:[0,1,2,5,6,7,9,10,15,18],skip:[7,8],sld:6,slice:[7,8,10],slidebook:6,small:[0,10,12,15,18],smooth:3,snapshot:6,so:[0,2,3,6,10,14,18],social:1,socio:1,softwar:18,some:[2,6,10,12,14,18],some_dask:10,some_metadata_attached_xr:10,some_np:10,some_z_stack:15,sourc:[7,8,9,10,11,12,13,14,15,16,18],space:1,spatial:[2,18],spatiali:[7,10,11,13],spatialx:[7,10,11,13],spatialz:7,spawn:0,spec:[0,14,15],specfic:[7,10],specif:[2,6,7,8,9,10,12],specifi:[7,8,10,15,18],sphinx:0,spike:2,split:0,spu:0,stabil:0,stabl:[5,18],standard:[0,2,5,7,9,10,12,14,15,18],start:[6,18],state:[6,14],statement:5,statu:1,still:[6,10],stitch:[0,2,7,8,10,18],storag:[15,18],store:[2,7,8,9,15,18],str:[7,8,9,10,11,13,14,15],strateg:3,strategi:6,stricter:0,string:[0,7,8,9,10,13,15,18],strive:5,structur:[9,10],sub:6,subclass:[0,7,8],submit:2,submodul:[0,2,4,19],subpackag:19,suit:2,summit:0,support:[0,2,5,6,7,8,9,10,12,13,14],supported_read:7,sure:2,sustain:5,swain:0,synch:0,syntax:18,system:[6,7,9,15,18],syx:15,t0:18,t:[0,4,7,8,10,11,14,15,18],tabl:10,tag:[0,2,18],tailor:5,take:[1,3,5,7,8],tallei:0,tarbal:4,target:[14,18],task:[0,5],tczyx:[7,8,10,15,18],team:[0,3,5,6],technic:15,temp:0,templat:0,tempor:18,temporari:1,temporarili:1,ten:[7,18],term:[2,3,5],termin:4,test:0,test_ome_tiff_writ:0,text:0,than:[2,10],thei:[1,2,3,10,12],them:[6,7,8,18],themselv:6,therebi:3,thi:[1,2,3,4,5,7,8,9,10,11,14,15,18],thing:6,those:10,thought:2,thread:10,threaten:1,three:[10,15],threshold:10,through:[2,3,4,10],thrown:7,tif:[15,18],tiff:[0,2,6,7,8,10,11,13,15],tiff_read:[7,19],tifffil:[0,5,10,11,13],tiffread:[2,7,8,10],tile:[0,2,7,8,10],tile_dim:[7,10],time:[3,6,7,8,10,15],timepoint:7,timeseri:[0,15],timeseries_writ:[7,19],timeserieswrit:15,to_dask:10,to_numpi:10,todo:14,togeth:[7,8,10,18],toloudi:[0,3],tool:[0,5,9],top:[0,2,7,10,18],toward:[1,6],tox:0,track:6,tracker:[3,5,6,17],transform:[2,10,14,19],transform_metadata_with_xslt:9,translat:[9,18],transpose_to_dim:7,tree:9,tri:3,trigger:0,trip:[7,8],troll:1,trust:3,tsyx:15,tupl:[2,7,9,10,14,15,18],turn:[0,10,18],tutori:5,two:[6,15],two_d_writ:[7,19],twodwrit:15,type:[0,2,8,9,10,11,12,13,15,19],typeerror:[7,10],typo:0,tyx:[10,13,15],tzyx:7,ubuntu:[5,18],unaccept:1,unavail:14,underli:[10,14],understand:5,understood:15,unexpectedshapeerror:[7,10],unifi:6,union:[7,8,9,10,11,13,14,15],unit:[0,7,9,10,18],unless:5,unprocess:10,unsupport:18,unsupported_mosa:[7,8],unsupportedfileformaterror:[7,10],until:[2,18],unus:0,unwelcom:1,up:[0,2,3,5,7,8,10,12],upcom:6,updat:[0,2,4,6,9,10],upgrad:0,upload:2,upper:0,uri:[7,8,14,15],url:18,us:[0,1,2,3,5,6,7,8,9,10,11,14,15,18],usag:[2,6,9],user:[5,6,7,9],usual:[9,18],util:[5,7,10,18,19],v4:18,valid:[2,6,7,9,10,11,15,18],validationerror:9,valu:[3,7,9,10,14,15],valueerror:[9,10,15],vari:[5,7,8],variabl:10,variou:3,vbtcxzy:7,ver:18,verb:0,veri:[10,18],version:[0,1,2,5,10],via:[1,3,10],viewpoint:1,virtual:2,visit:18,visual:5,volumetr:[10,11,13,15],vote:3,w:0,wa:[2,7,10],wai:[3,5],want:[2,5,6,7,8,10,14,15,18],warn:[0,7],wasn:[7,10],watkin:5,we:[1,2,5,6,7,8,9,10,14,15],websit:[2,18],welcom:[1,2,5],well:[2,5,6,10],were:0,what:[1,5,6],whatev:7,when:[1,2,3,5,7,8,10,14,15,18],where:[5,6,7,10,15],wherev:[6,18],whether:[5,6,9,10,14],which:[1,2,5,7,10,11,12,13,14],who:[1,3,5,6],whole:[7,9,18],whose:14,wiki:[1,5],wikipedia:5,window:[5,10,18],with_tim:7,within:[1,6],without:[1,7],wmv:10,won:[7,8],word:0,work:[0,2,3,5,6,9,18],workflow:0,would:[2,6,7,8,10,12,15],wrap:[0,2,10,11,13,14],wrapper:[2,10,14],write:[7,15,18],writer:[0,6,7,19],written:15,www:1,x:[7,8,9,10,11,13,15,18],x_start_index:18,xarrai:[2,5,7,8,10],xarray_dask_data:[7,10,18],xarray_data:[7,10,18],xml:[0,9,10,11,15,18],xr:[7,10],xsd:9,xslt:[0,6,9],y:[7,8,9,10,11,13,15,18],y_start_index:18,yaml:0,yet:0,you:[2,4,5,7,8,10,17,18],your:[2,4,7,8,9,10,11,18],your_development_typ:2,your_name_her:2,yourread:2,yx:[7,15,18],yzx:7,z1:7,z:[7,8,9,10,11,13,15,18],zarr:[0,6],zcyx:[15,18],zeiss:10,zero:0,zstack_t8:[7,8],zstack_t8_data:[7,8],ztyx:10,zyx:[7,8,10,15,18]},titles:["Changelog","Contributor Covenant Code of Conduct","Contributing","Governance Model","Installation","Mission and Values","AICSImageIO Roadmap","aicsimageio package","aicsimageio.aics_image.AICSImage","aicsimageio.metadata package","aicsimageio.readers package","aicsimageio.readers.ome_tiff_reader.OmeTiffReader","aicsimageio.readers.reader.Reader","aicsimageio.readers.tiff_reader.TiffReader","aicsimageio.utils package","aicsimageio.writers package","aicsimageio.writers.ome_tiff_writer.OmeTiffWriter","Developer Resources","AICSImageIO","aicsimageio"],titleterms:{"0":0,"01":0,"02":0,"03":0,"04":0,"05":0,"06":0,"07":0,"08":0,"09":0,"1":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"17":0,"2":0,"2019":0,"2020":[0,6],"2021":0,"21":0,"22":0,"23":0,"25":0,"26":0,"27":0,"28":0,"3":0,"30":0,"31":0,"4":[0,6],"5":0,"6":0,"7":0,"abstract":3,"class":2,"new":[0,2],And:3,For:6,The:3,about:6,absolut:18,access:6,acknowledg:5,ad:2,aics_imag:[7,8],aicsimag:[8,18],aicsimageio:[6,7,8,9,10,11,12,13,14,15,16,18,19],api:6,array_like_read:10,attach:18,attribut:1,avail:6,basic:2,benchmark:[2,18],bioformats_read:10,cached_properti:14,changelog:0,citat:18,cloud:18,code:1,commun:3,complet:6,conduct:1,constant:7,content:[7,9,10,14,15],contribut:2,contributor:[1,3],convert:6,coordin:18,core:3,council:3,coven:1,current:6,custom:2,czi_read:10,dask_proxi:14,decis:3,default_read:10,delai:18,depend:2,deploi:2,develop:[3,17,18],dimens:7,dimension:6,doc:18,document:[2,6,18],easi:6,enabl:6,enforc:1,except:7,expand:6,extra:18,featur:18,file:6,fix:0,format:[6,7,18],from:4,full:18,get:2,govern:3,imag:[6,18],implement:2,indic:18,instal:[4,18],io:18,io_util:14,lif_read:10,list:6,make:[3,6],metadata:[6,9,18],mission:5,model:3,modul:[7,9,10,14,15],mosaic:18,n:6,note:18,om:18,ome_tiff_read:[10,11],ome_tiff_writ:[15,16],ometiffread:11,ometiffwrit:16,option:2,other:[0,18],our:1,packag:[7,9,10,14,15],page:18,partial:6,plane:18,pledg:1,posit:18,possibl:6,process:3,proprietari:6,quick:6,quickstart:18,read:[6,18],reader:[2,6,10,11,12,13,18],releas:[4,6],remot:6,resourc:17,respons:[1,3],roadmap:6,role:3,save:18,scope:1,septemb:6,seri:6,simpl:6,singl:18,sourc:[4,6],specif:18,stabl:4,standard:[1,6],start:2,steer:3,submodul:[7,9,10,14,15],subpackag:7,support:18,tabl:18,test:2,thi:6,tiff:18,tiff_read:[10,13],tiffread:13,tile:18,timeseries_writ:15,transform:7,two_d_writ:15,type:7,unreleas:0,util:[9,14],v3:0,v4:0,valu:5,write:6,writer:[15,16,18],xarrai:18}})