import{z} from 'zod';
import { requiredString } from '../util/util';



export const activityschema = z.object({
    title: requiredString('Title'), 
    description: requiredString('description'), 
    category: requiredString('category'), 
    date: z.coerce.date({
        message: 'Date is required'
    } ),
 
    location: z.object({

        venue: requiredString('venue'),
        city: z.string().optional(),
        latitude: z.coerce.number(),
        longitude: z.coerce.number(),
        
    }
    )

})

export type ActivitySchema = z.infer<typeof activityschema>