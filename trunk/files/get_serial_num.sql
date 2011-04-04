CREATE DEFINER = 'root'@'localhost' PROCEDURE `get_serial_num`(
        IN s_type VARCHAR(40),
        IN s_length INTEGER,
        IN s_date VARCHAR(8),
        OUT s_value VARCHAR(40)
    )
    NOT DETERMINISTIC
    CONTAINS SQL
    SQL SECURITY DEFINER
    COMMENT ''
BEGIN
	declare stmt varchar(2000);
    declare sqlstr varchar(2000);  
    declare v_recnum int;   
    declare v_today varchar(10); 
    declare v_today_h varchar(10);    
    declare v_oldday varchar(8);      
    declare field_value varchar(40);
    declare v_length int;      
    declare temp_num int;  
    declare temp_value varchar(1000);   
    declare s_where varchar(100);
	select count(1) into v_recnum from et_sys_var where field_name=s_type ;
     
    if v_recnum = 0 then  
        begin
    		set s_value = '-1';
  		end;   
    ELSE    
    	begin      
        	select date_format( now(),'%Y%m%d') into v_today ; 
        	if s_type = 'request_no' then 
        		select date_format( now(),'%Y%m%d%H') into v_today_h; 
            end if ;
            
    		select field_date into v_oldday from et_sys_var where field_name=s_type ; 
            set @v_today = v_today ;     
            set @s_type = s_type ;
            #跨天修改当天的流水号为1 ，若为当天则将流水号加1
    	    if v_oldday <> v_today then    
            	begin            
                	select date_format( now(),'%Y%m%d%H') into v_today;
                	set @sqlstr = 'update et_sys_var set field_date = ? ,seri_num = 1 where field_name=?';
					prepare stmt from @sqlstr;
                    execute stmt USING  @v_today , @s_type ; 
                    deallocate prepare stmt; 
                    commit;  
            	end;
            else
                begin         
					set @sqlstr = 'update et_sys_var set seri_num = seri_num+1  where field_name=? ';
                    prepare stmt from @sqlstr;
                    execute stmt USING  @s_type ; 
                    deallocate prepare stmt;  
                    commit;
                    
                end;
            end if;
    	end; 
        
        #根据s_type生成流水号
        select CONCAT(seri_num,'') into temp_value from et_sys_var where field_name=s_type ;
   
        if s_type = 't_user_id' then
        	begin
            	select length(temp_value) into temp_num;
    			set v_length = temp_num;
    			while (v_length<s_length) do 
        			set temp_value = CONCAT('0', temp_value);
        			set v_length = v_length + 1;
    			end WHILE;
                #set s_value = concat('T',temp_value) ;
        	end;  
        end if;
       
        
        #乘客id
        if s_type = 'p_user_id' then 
        	begin
            	select length(temp_value) into temp_num;
    			set v_length = temp_num;
    			while (v_length<s_length) do 
        			set temp_value = CONCAT('0', temp_value);
        			set v_length = v_length + 1;
    			end WHILE;
                set s_value = concat('P',temp_value) ;
        	end;         
        #出租车id
        elseif s_type = 't_user_id' then
        	begin
            	select length(temp_value) into temp_num;
    			set v_length = temp_num;
    			while (v_length<s_length) do 
        			set temp_value = CONCAT('0', temp_value);
        			set v_length = v_length + 1;
    			end WHILE;
                set s_value = concat('T',temp_value) ;
        	end;  
        #请求编号
        elseif s_type = 'request_no' then
            begin  	
                if s_date = 'true' then 
    				begin
        				select length(temp_value)+10 into temp_num;
        			end ;
                else 
                	select length(temp_value) into temp_num;
    			end if ;   
                
    			set v_length = temp_num;
    			while (v_length<s_length) do 
        			set temp_value = CONCAT('0', temp_value);
        			set v_length = v_length + 1;
    			end WHILE;
                
                if s_date = 'true' then
    				begin
        				set s_value = concat(v_today_h,temp_value) ;
        			end ;
                else 
                	set s_value = temp_value ; 
    			end if ; 
            end ;
        elseif s_type = 'track_id' then
            begin  	
                if s_date = 'true' then 
    				begin
        				select length(temp_value)+8 into temp_num;
        			end ;
                else 
                	select length(temp_value) into temp_num;
    			end if ;   
                
    			set v_length = temp_num;
    			while (v_length<s_length) do 
        			set temp_value = CONCAT('0', temp_value);
        			set v_length = v_length + 1;
    			end WHILE;

                if s_date = 'true' then
    				begin
        				set s_value = concat(v_today,temp_value) ;
        			end ;
                else 
                	set s_value = temp_value ; 
    			end if ; 
            end ;
        else
            begin
            	set s_value = templue ; 	
        	end;  
        end if ;      
    end if; 

END;